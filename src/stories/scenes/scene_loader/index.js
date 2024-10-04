import { html } from "htm/preact/index.js";
import { useRef, useState } from 'preact/hooks'
import styled from "styled-components";
import { BottomMenu } from "../scene_gui/menu";

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
	z-index: 10;

	display: ${props => props.display || "flex"};
	justify-content: center;
	align-items: center;

	button {
		padding: 0.5rem;
		font-size: 1.5em;
	}
`;

const AppStageGUIWrapper = styled.div`
	width:100vw;
	height:100vh;
	overflow: hidden;
	position: relative;

	.footer {
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		z-index: 10;
	}
`;

const AppStageWrapper = styled.div`
	position: relative;
	background-color: #222;
	width:100%;
	height:80%;
	overflow: hidden;
	margin: auto;
`;

function makeResponsive(isResp, respDim, isScale, scaleType, domContainers, lib) {
	var lastW, lastH, lastS=1;

	window.addEventListener('resize', resizeCanvas);
	resizeCanvas();

	function resizeCanvas() {
		const parentG = domContainers[0].parentElement

		var w = lib.properties.width, h = lib.properties.height;
		var iw = parentG.offsetWidth, ih=parentG.offsetHeight;
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;

		if(isResp) {
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {
				sRatio = lastS;
			}
			else if(!isScale) {
				if(iw<w || ih<h)
					sRatio = Math.min(xRatio, yRatio);
			}
			else if(scaleType==1) {
				sRatio = Math.min(xRatio, yRatio);
			}
			else if(scaleType==2) {
				sRatio = Math.max(xRatio, yRatio);
			}
		}

		domContainers[0].width = w * pRatio * sRatio;
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {
			container.style.width = w * sRatio + 'px';
			container.style.height = h * sRatio + 'px';
		});

		lastW = iw; lastH = ih; lastS = sRatio;

		if(!window.stage) {
			return;
		}

		stage.scaleX = pRatio*sRatio;
		stage.scaleY = pRatio*sRatio;
		stage.tickOnUpdate = false;
		stage.update();
		stage.tickOnUpdate = true;
	}
}

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
		prepResponsive(scene.getLibrary());

		console.debug(`loaded scene code for (${sceneSrc}) `, AdobeAn.getComposition(composition));
	}

	function prepResponsive(lib) {
		console.log('SHIT BE FUCKING QUETH', lib)

		makeResponsive(true,'both',false,1,[
			canvasRef.current,
			domOverlayContainerRef.current
		], lib);
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
		// this means we tecknically have two listeners..
		// @TODO, fix
		prepResponsive(lib);

		AdobeAn.compositionLoaded(lib.properties.id);

		fnStartAnimation();
	}

	if(!loaded) {
		loadScene();
	}

	return html`
		<${AppStageGUIWrapper}>
			<${AppStageWrapper} ref=${animContainerRef}>
				<canvas
					ref=${canvasRef}
					width="2048"
					height="1152"
					style="margin: auto; display: block; background-color:#333;">
				</canvas>

				<div
					ref=${domOverlayContainerRef}
					style="pointer-events:none; overflow:hidden; width:2048px; height:1152px; position: absolute; left: 0px; top: 0px; display: block;">
				</div>

				<${StartButtonOverLay} display=${sceneState === "STARTED" ? "none" : "flex"}>
					<button ref=${startBtnRef} onClick=${() => startScene()}>Start Scene</button>
				</${StartButtonOverLay}>

				
			</${AppStageWrapper}>
			<div class="footer">
				footer<br />
				footer<br />
				footer<br />
				footer<br />
				footer<br />
				footer<br />
				<${BottomMenu} />
			</div>
		</${AppStageGUIWrapper}>
	`;
}
