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

		createjs.Sound.addEventListener("fileload", (evt) => this.loadHandler(evt));
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

	public loadCount: number = 0;
	public async preloadSceneLoadAudio(sceneConfig: SceneConfig) {
		this.sceneConfig = sceneConfig;

		this.preloadVoices();
		this.preloadSFX();
		this.preloadMusic();

		return new Promise<void>((resolve) => {
			const interval = setInterval(() => {
				if(this.loadCount === 0) {
					console.info('Finished preloading sounds.');
					clearInterval(interval);
					resolve();
				}
			}, 100);
		});
	}

	public loadHandler() {
		this.loadCount--;
	}

	private preloadMusic() {
		const path = `assets/music/${this.sceneConfig.music}`;

		try {// If registersound is called twice on the same sound SoundJS breaks
			if(createjs.Sound.loadComplete(path)) {
				return;
			}
		}catch(e){}

		this.loadCount++;
		createjs.Sound.registerSound(path, path);
	}

	private preloadVoices() {
		this.sceneConfig.actions.forEach(action => {
			if(!action.voice) {
				return;
			}

			const path = `assets/voice/${action.voice}`;

			try {// If registersound is called twice on the same sound SoundJS breaks
				if(createjs.Sound.loadComplete(path)) {
					return;
				}
			}catch(e){}

			this.loadCount++;
			createjs.Sound.registerSound(path, path);
		});
	}

	private preloadSFX() {
		SFX_LIST.forEach(name => {
			const path = `assets/sfx/${name}`;

			try {// If registersound is called twice on the same sound SoundJS breaks
				if(createjs.Sound.loadComplete(path)) {
					return;
				}
			}catch(e){}

			this.loadCount++;
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
		const path = `assets/music/${this.sceneConfig.music}`;

		if(this.currentMusicInstance !== null) {
			this.currentMusicInstance.stop();
		}

		try {
			console.log(createjs.Sound.loadComplete(path));
			this.currentMusicInstance = createjs.Sound.play(path);
			return;
		} catch(e) {
			console.error("Error while trying to play theme", path);
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