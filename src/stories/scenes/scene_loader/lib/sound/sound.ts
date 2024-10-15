import { SceneConfig } from "../../../app_config";
import { getScene } from "../get_scene";
import { SFX_LIST } from "./sfx_list";

// Some hacks to make CreateJS play nice with Typescript
const windowRef: any = (window as any);
let createjs: any = windowRef.createjs;

export class AudioManager {

	private sceneConfig: any;
	private static instance: AudioManager;

	constructor() {
		if((window as any).initializedSound === true) {
			return;
		}

		//update createjs reference
		createjs = windowRef.createjs;

		createjs.Sound.registerPlugins([createjs.WebAudioPlugin, createjs.FlashAudioPlugin]);
		createjs.Sound.alternateExtensions = ["mp3"];
		(window as any).initializedSound = true;
	}

	public static getInstance() {
		if(!AudioManager.instance) {
			AudioManager.instance = new AudioManager();
		}

		return AudioManager.instance;
	}

	public stop() {
		createjs.Sound.stop()
	}

	public async preloadLoadEffects() {
		const SFX_PATH = "assets/sfx/";
		const sfx_paths: string[] = SFX_LIST.map(name => SFX_PATH + name);

		// now load em in that layer...
	}

	public preloadSceneLoadAudio(sceneConfig: SceneConfig) {
		this.sceneConfig = sceneConfig;

		this.preloadVoices();
		this.preloadSFX();
		this.preloadMusic();
		// Load the background music
	}

	// @TODO, should be async so we can block until they are all loaded
	private preloadMusic() {
		const path = `assets/music/${this.sceneConfig.music}`;

		try {// If registersound is called twice on the same sound SoundJS breaks
			if(createjs.Sound.loadComplete(path)) {
				return;
			}
		}catch(e){}

		createjs.Sound.registerSound(path, path);
	}

	// @TODO, should be async so we can block until they are all loaded
	private preloadVoices() {
		this.sceneConfig.actions.forEach(action => {
			const path = `assets/voice/${action.voice}`;

			try {// If registersound is called twice on the same sound SoundJS breaks
				if(createjs.Sound.loadComplete(path)) {
					return;
				}
			}catch(e){}

			createjs.Sound.registerSound(path, path);
		});
	}

	// @TODO, should be async so we can block until they are all loaded
	private preloadSFX() {
		SFX_LIST.forEach(name => {
			const path = `assets/sfx/${name}`;

			try {// If registersound is called twice on the same sound SoundJS breaks
				if(createjs.Sound.loadComplete(path)) {
					return;
				}
			}catch(e){}

			createjs.Sound.registerSound(path, path);
		});
	}

	public playSound(name) {
		const path = `assets/sfx/${name}`;

		try {
			createjs.Sound.loadComplete(path);
			createjs.Sound.play(path);
			return;
		} catch(e) {
			console.error("Error while trying to play sound", path);
			console.error(e)
		}
	}

	private currentMusicInstance: any = null;
	public playTheme() {
		const path = `assets/voice/${this.sceneConfig.music}`;

		if(this.currentMusicInstance !== null) {
			this.currentMusicInstance.stop();
		}

		try {
			console.log(createjs.Sound.loadComplete(path));
			this.currentMusicInstance = createjs.Sound.play(path);
			return;
		} catch(e) {
			console.error("Error while trying to play voice", path);
			console.error(e)
		}
	}

	private currentVoiceInstance: any = null;
	public playVoice(name) {
		const path = `assets/voice/${name}`;

		if(this.currentVoiceInstance !== null) {
			this.currentVoiceInstance.stop();
		}

		try {
			console.log(createjs.Sound.loadComplete(path));
			this.currentVoiceInstance = createjs.Sound.play(path);
			return;
		} catch(e) {
			console.error("Error while trying to play voice", path);
			console.error(e)
		}
	}

}