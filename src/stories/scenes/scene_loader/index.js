import { html } from "htm/preact/index.js";
import { useRef, useState } from 'preact/hooks'
import { StoryTeller } from "../scene_gui/storyteller";
import { setUpGlobalsForScene } from "./lib/global_functions";
import { useEffect } from "react";
import { AppStageGUIWrapper, AppStageWrapper, StartButtonOverLay } from "./index.styles";
import { makeResponsive } from "./lib/make_responsive";
import { injectStandardSceneMethods } from "./lib/standard_injections";
import { loadScene } from "./lib/load_scene";

const SCENE_STATES = {
	STARTED: "started",
	LOADING: "loading",
	READY: "ready",
	INIT: "init"
};

export function AppStage(sceneConfig) {
	const [sceneState, setSceneState] = useState(SCENE_STATES.INIT);
	const [storytellerText, setStorytellerText] = useState("");

	const canvasRef = useRef(null);
	const animContainerRef = useRef(null);
	const startBtnRef = useRef(null);

	async function prepareScene() {
		setSceneState(SCENE_STATES.LOADING)
		await loadScene(sceneConfig)
		setSceneState(SCENE_STATES.READY)

		// Setups the next/prev etc. function references in the canvas scenes
		setUpGlobalsForScene(
			sceneConfig,
			(text) =>{
				setStorytellerText(text);
			}
		);
	}

	function startScene() {
		setSceneState(SCENE_STATES.STARTED);

		const AdobeAn = window.AdobeAn;
		const createjs = window.createjs;
		const sceneComp = AdobeAn.getComposition(sceneConfig.compositionId);
		const lib =  sceneComp.getLibrary();
		const sceneClip = new lib[sceneConfig.rootFunctionName]();
		const stage = new lib.Stage(canvasRef.current);

		// Let the library know stuff was loaded???
		// Stuff still seems to work if i do not call this
		AdobeAn.compositionLoaded(lib.properties.id);

		// Add scene methods
		// look for the sceneInstance child, otherwise default to the root as the scene
		const sceneInstance = sceneClip.sceneInstance !== undefined ? sceneClip.sceneInstance : sceneClip;
		injectStandardSceneMethods(sceneInstance, sceneConfig);
		sceneInstance.playTheme();


		// Add sceneClip and start listen for updates in order to render them
		stage.addChild(sceneClip);
		createjs.Ticker.framerate = lib.properties.fps;
		createjs.Ticker.addEventListener("tick", stage);

		// Make the canvas responsive
		makeResponsive(true,'both',false,1,[
			canvasRef.current
		], lib, stage);
	}

	// Component initialize
	useEffect(() => {
		prepareScene();

		// Make sure to stop sounds when the component is destroyed
		return () => window.createjs.Sound.stop()
	}, []);

	return html`
		<${AppStageGUIWrapper}>
			<${AppStageWrapper} ref=${animContainerRef}>
				<canvas ref=${canvasRef}></canvas>

				<${StartButtonOverLay} display=${sceneState === SCENE_STATES.STARTED ? "none" : "flex"}>
					<button ref=${startBtnRef} onClick=${() => sceneState == SCENE_STATES.READY && startScene()}>
						${
							sceneState === SCENE_STATES.READY
								? "Start Scene"
								: "Loading scene..."
						}
					</button>
				</${StartButtonOverLay}>

				<div class="footer">
					${sceneState === SCENE_STATES.STARTED && html`<${StoryTeller} text=${storytellerText} />`}
				</div>
			</${AppStageWrapper}>
		</${AppStageGUIWrapper}>
	`;
}
