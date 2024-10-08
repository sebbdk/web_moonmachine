import { SceneConfig } from "../../app_config";
import { loadScript } from "./loadscript";

export async function loadScene(sceneConfig: SceneConfig): Promise<void> {
	// load libraries
	await loadScript('/createjs.js');
	await loadScript('/soundjs-0.5.2.min.js');

	// load the scene it self and the assets
	await loadScript(sceneConfig.sceneSrc);
	await loadSceneAssets(sceneConfig);
	// @TODO load audio here

	console.debug(`loaded scene ${sceneConfig.id}`);
}

function getManifestWithNewRoots(root, manifest) {
	return manifest.map((i) => {
		return {
			src: root + i.src,
			id: i.id
		}
	});
}

async function loadSceneAssets(sceneConfig: SceneConfig): Promise<any> {
	const createjs = (window as any).createjs;

	return new Promise<void>((resolve, reject) => {
		const sceneComp = (window as any).AdobeAn.getComposition(sceneConfig.compositionId);
		const lib = sceneComp.getLibrary();
		const manifest = getManifestWithNewRoots(sceneConfig.assetsPath, lib.properties.manifest);

		function handleFileLoad(evt, scene) {
			const images = scene.getImages();
			if (evt && (evt.item.type == "image")) { images[evt.item.id] = evt.result; }
		}

		function handleComplete(evt, scene) {
			var ss = scene.getSpriteSheet();
			var queue = evt.target;
			var ssMetadata = lib.ssMetadata;

			for(let i=0; i<ssMetadata.length; i++) {
				ss[ssMetadata[i].name] = new createjs.SpriteSheet( {"images": [queue.getResult(ssMetadata[i].name)], "frames": ssMetadata[i].frames} )
			}

			console.info(`finished loading sprite sheets in ${sceneConfig.assetsPath}`)
			resolve();
		}

		const loader = new createjs.LoadQueue(false);
		loader.addEventListener("fileload", (evt) => handleFileLoad(evt, sceneComp));
		loader.addEventListener("complete", (evt) => handleComplete(evt, sceneComp));
		loader.loadManifest(manifest);
	})
}
