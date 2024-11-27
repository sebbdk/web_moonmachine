import { html } from "htm/preact/index.js";
import { useRef, useState } from 'preact/hooks'
import { StoryTeller } from "../scene_gui/storyteller";
import { useEffect } from "react";
import { AppStageGUIWrapper, AppStageWrapper, StartButtonOverLay } from "./index.styles";
import { makeResponsive } from "./lib/make_responsive";
import { injectStandardSceneMethods } from "./lib/standard_injections";
import { loadScene } from "./lib/load_scene";
import { AudioManager } from "./lib/sound/sound";
import { BOOK_CONFIG } from "../app_config";

const SCENE_STATES = {
	STARTED: "started",
	LOADING: "loading",
	READY: "ready",
	INIT: "init"
};

export function AppStage(sceneConfig) {
	const [sceneState, setSceneState] = useState(SCENE_STATES.INIT);
	const [storytellerText, setStorytellerText] = useState("");
	let [sceneInstance, setSceneInstance] = useState({});
	let [sound, setSound] = useState();

	const canvasRef = useRef(null);
	const animContainerRef = useRef(null);
	const startBtnRef = useRef(null);

	async function prepareScene() {
		setSceneState(SCENE_STATES.LOADING)
		await loadScene(sceneConfig, sound)

		sound = AudioManager.getInstance();
		await sound.preloadSceneLoadAudio(sceneConfig);

		setSound(sound);
		setSceneState(SCENE_STATES.READY);

		if(BOOK_CONFIG.disableSound) {
			startScene();
			console.warn('!!AUTO STARTING SCENE, since sound is disabled in BOOK_CONFIG!!');
		}
	}

	function startScene() {
		setSceneState(SCENE_STATES.STARTED);

		if(BOOK_CONFIG.debug) {
			console.warn('!!DEBUGGING IS ENABLED!!');
		}

		const AdobeAn = window.AdobeAn;
		const createjs = window.createjs;
		const sceneComp = AdobeAn.getComposition(sceneConfig.compositionId);
		const lib =  sceneComp.getLibrary();
		const sceneClip = new lib[sceneConfig.rootFunctionName]();
		const stage = new lib.Stage(canvasRef.current);

		//Enable touch for mobile/tablet
		createjs.Touch.enable(stage);

		// Let the library know stuff was loaded???
		// Stuff still seems to work if i do not call this
		AdobeAn.compositionLoaded(lib.properties.id);

		// Add scene methods
		// look for the sceneInstance child, otherwise default to the root as the scene
		sceneInstance = sceneClip.sceneInstance !== undefined ? sceneClip.sceneInstance : sceneClip;
		injectStandardSceneMethods(sceneInstance, sceneConfig, onStep, onGotoNextScene, sound);
		sceneInstance.playTheme();
		setSceneInstance(sceneInstance);

		// Add sceneClip and start listen for updates in order to render them
		stage.addChild(sceneClip);
		createjs.Ticker.framerate = BOOK_CONFIG.debug === true ? 180 : lib.properties.fps;
		createjs.Ticker.addEventListener("tick", stage);

		// Make the canvas responsive
		makeResponsive(true,'both',false,1,[
			canvasRef.current
		], lib, stage);
	}

	function onStep(step) {
		sound.playVoice(step.voice);
		setStorytellerText(step.text);
	}

	function onGotoNextScene() {
		console.log('YES; NOW LOAD THE NEXT SCENE')
	}

	function onNext(){
		sceneInstance.continue();
	}

	function onPrev(){
		sceneInstance.back();
	}

	// Component initialize
	useEffect(() => {
		prepareScene();

		// @TODO, make sure the canvas is killed
		// Storybook seems to keep them alive after navigation...
		// Make sure to stop sounds when the component is destroyed
		return () => sound.stop()
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
					${sceneState === SCENE_STATES.STARTED && html`<${StoryTeller} text=${storytellerText} onNext=${() => onNext()} onPrev=${() => onPrev()} />`}
				</div>
			</${AppStageWrapper}>
		</${AppStageGUIWrapper}>
	`;
}
