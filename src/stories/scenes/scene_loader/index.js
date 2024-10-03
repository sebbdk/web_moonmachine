import { html } from "htm/preact/index.js";
import { useRef, useState } from 'preact/hooks'
import styled from "styled-components";

async function loadScript(path) {
	console.info(`Loading script: ${path}`)

	return new Promise((resolve, reject) => {
		const script = document.createElement("script");
		script.src = path;
		script.async = true;
		script.onload = () => {
			console.info(`Finished loading script: ${path}`)
			resolve();
		};
		script.onError = () => {
			console.error(`Error while loading script: ${path}`)
			reject();
		};

		document.body.appendChild(script);
	})
}

function getManifestWithNewRoots(root, manifest) {
	return manifest.map((i) => {
		return {
			src: root + i.src,
			id: i.id
		}
	});
}

async function loadSceneAssets(assetsPath, scene) {
	return new Promise((resolve, reject) => {
		const lib = scene.getLibrary();
		const manifest = getManifestWithNewRoots(assetsPath, lib.properties.manifest);

		function handleFileLoad(evt, scene) {
			const images = scene.getImages();
			if (evt && (evt.item.type == "image")) { images[evt.item.id] = evt.result; }
		}

		function handleComplete(evt, scene) {
			var ss = scene.getSpriteSheet();
			var queue = evt.target;
			var ssMetadata = lib.ssMetadata;

			for(let i=0; i<ssMetadata.length; i++) {
				ss[ssMetadata[i].name] = new window.createjs.SpriteSheet( {"images": [queue.getResult(ssMetadata[i].name)], "frames": ssMetadata[i].frames} )
			}

			console.info(`finished loading sprite sheets in ${assetsPath}`)
			resolve();
		}

		const loader = new window.createjs.LoadQueue(false);
		loader.addEventListener("fileload", (evt) => handleFileLoad(evt, scene));
		loader.addEventListener("complete", (evt) => handleComplete(evt, scene));
		loader.loadManifest(manifest);
	})
}

const StartButtonOverLay = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0,0,0, 0.5);
	z-index: 10;

	display: ${props => props.display || "flex"};
	justify-content: center;
	align-items: center;

	button {
		padding: 0.5rem;
		font-size: 1.5em;
	}
`;

export function AppStage({ sceneSrc, composition, assetsPath, rootFunctionName }) {
	let [scene, setScene] = useState(null);
	const [sceneState, setSceneState] = useState("LOADING");
	const [loaded, setLoaded] = useState(false);

	const canvasRef = useRef(null);
	const animContainerRef = useRef(null);
	const domOverlayContainerRef = useRef(null);
	const startBtnRef = useRef(null);

	async function loadScene() {
		await loadScript('/createjs.js');
		await loadScript(sceneSrc);

		scene = AdobeAn.getComposition(composition);

		await loadSceneAssets(assetsPath, scene, rootFunctionName)

		setLoaded(true);
		setScene(scene);

		// make sure we have responsive scaling before scene start
		prepResponsive();

		console.debug(`loaded scene code for (${sceneSrc}) `, AdobeAn.getComposition(composition));
	}

	function prepResponsive() {
		AdobeAn.makeResponsive(true,'both',false,1,[ 
			canvasRef.current,
			animContainerRef.current,
			domOverlayContainerRef.current
		]);
	}

	function startScene() {
		if(canvasRef === null || !loaded) {
			return;
		}

		setSceneState("STARTED");

		const lib = scene.getLibrary();
		const exportRoot = new lib[rootFunctionName]();
		const stage = new lib.Stage(canvasRef.current);
		const createjs = window.createjs;
		const AdobeAn = window.AdobeAn;

		//exportRoot.instance_1.frame_25()

		// Un hackarino, the loaded scene uses this global reference.
		window.stage = stage;

		//Registers the "tick" event listener.
		function fnStartAnimation() {
			stage.addChild(exportRoot);
			createjs.Ticker.framerate = lib.properties.fps;
			createjs.Ticker.addEventListener("tick", stage);
		}

		// make sure the canvas has responsive scaling after when scene starts
		prepResponsive();

		AdobeAn.compositionLoaded(lib.properties.id);

		fnStartAnimation();
	}

	if(!loaded) {
		loadScene();
	}

	return html`
		<div ref=${animContainerRef} style="background-color:rgba(204, 204, 204, 1.00); width:2048px; height:1152px; position: relative;">
			<canvas
				ref=${canvasRef}
				width="2048"
				height="1152"
				style="position: absolute; display: block; background-color:rgba(204, 204, 204, 1.00);">
			</canvas>

			<div
				ref=${domOverlayContainerRef}
				style="pointer-events:none; overflow:hidden; width:2048px; height:1152px; position: absolute; left: 0px; top: 0px; display: block;">
			</div>

			<${StartButtonOverLay} display=${sceneState === "STARTED" ? "none" : "flex"}>
				<button ref=${startBtnRef} onClick=${() => startScene()}>Start Scene</button>
			</${StartButtonOverLay}>
		</div>
	`;
}
