import { getScene } from "../get_scene";
import { SFX_LIST } from "./sfx_list";

// Some hacks to make CreateJS play nice with Typescript
const windowRef: any = (window as any);
const createjs: any = windowRef.createjs;

export class AudioManager {

	constructor() {

	}

	public async preloadLoadEffects() {
		const SFX_PATH = "assets/sfx/";
		const sfx_paths: string[] = SFX_LIST.map(name => SFX_PATH + name);

		// now load em in that layer...
	}

	public async preloadSceneLoadAudio(sceneId) {
		const currentScene = getScene(sceneId);

		// Load the voice lines
		// Load the background music
	}

}