import { BOOK_CONFIG, SceneConfig } from "../../app_config";

export function getScene(id): SceneConfig {
	return BOOK_CONFIG.scenes.find(scene => scene.id === id) || BOOK_CONFIG.scenes[0];
}
