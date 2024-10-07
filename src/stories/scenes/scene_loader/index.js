import { html } from "htm/preact/index.js";
import { useRef, useState } from 'preact/hooks'
import styled from "styled-components";
import { BottomMenu } from "../scene_gui/menu";
import { StoryTeller } from "../scene_gui/storyteller";
import { setUpGlobalsForScene } from "./global_functions";
import { useEffect } from "react";

const loadedScripts = [];
async function loadScript(path) {

	if(loadedScripts.indexOf(path) > -1) {
		console.info(`Already loaded script: ${path}, ${loadedScripts.indexOf(path)}`)
		console.log(loadedScripts)
		//return;
	}

	console.info(`Loading script: ${path}`)
	loadedScripts.push(path);

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
		margin: auto;
		position: relative;
		bottom: 8%;
		height: 23%;
		width: 100%;
		z-index: 10;
	}
`;

const AppStageWrapper = styled.div`
	position: relative;
	background-color: #222;
	width:100%;
	height:85%;
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

		document.querySelector('.footer').style.width = domContainers[0].width + "px";

		lastW = iw; lastH = ih; lastS = sRatio;

		console.log(domContainers[0].width)
		//footer
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

export function AppStage({ sceneSrc, composition, assetsPath, rootFunctionName, showFooter, sceneId }) {
	let [scene, setScene] = useState(null);
	const [sceneState, setSceneState] = useState("INIT");
	const [loaded, setLoaded] = useState(false);
	const [globalControls, setGlobalControls] = useState(null);
	const [storytellerText, setStorytellerText] = useState("");

	const canvasRef = useRef(null);
	const animContainerRef = useRef(null);
	const domOverlayContainerRef = useRef(null);
	const startBtnRef = useRef(null);

	async function loadScene() {
		if(sceneState == "LOADING") {
			return;
		}

		if(sceneState == "INIT") {
			setSceneState("LOADING")
		}

		console.log('load scene!!!')
		await loadScript('/createjs.js');
		await loadScript('/soundjs-0.5.2.min.js');
		await loadScript(sceneSrc);

		// Setups the next/prev etc. function references in the canvas scenes
		setGlobalControls(setUpGlobalsForScene(
			sceneId,
			(text) =>{
				console.log()
				console.log("NEXT FUCKS")
				setStorytellerText(text);
			}
		));

		scene = AdobeAn.getComposition(composition);

		await loadSceneAssets(assetsPath, scene, rootFunctionName)

		setLoaded(true);
		setScene(scene);

		// make sure we have responsive scaling before scene start
		prepResponsive(scene.getLibrary());

		console.debug(`loaded scene code for (${sceneSrc}) `, AdobeAn.getComposition(composition));
	}

	// handle component unload
	useEffect(() => {
		return () => {
			console.log('shit...!!'),
			console.log(globalControls)
			window.createjs.Sound.stop();
		};
	}, []);

	function prepResponsive(lib) {
		makeResponsive(true,'both',false,1,[
			canvasRef.current,
			domOverlayContainerRef.current
		], lib);
	}

	function startScene() {
		if(canvasRef === null || !loaded) {
			return;
		}

		if(sceneState == "STARTED") {
			return;
		}

		console.log('WUT!!')

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
		globalControls.playTheme();
	}

	if(!loaded) {
		loadScene();
	}

	return html`
		<${AppStageGUIWrapper} showFooter=${showFooter}>
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
				<${BottomMenu} />
				<${StoryTeller} text=${storytellerText} />
			</div>
		</${AppStageGUIWrapper}>
	`;
}
