import { BOOK_CONFIG, SceneConfig } from "../../app_config";

export function injectScene5Drag(sceneClip, sceneConfig:SceneConfig) {
	const parts = [
		'top',
		'bottom',
		'spire',
		'window',
		'middle'
	];

	sceneClip.assembleRocket = function() {
		console.info('Trying to assemble rocket!!')

		if(sceneClip.initializedRocketGame === true) {
			return;
		}
		sceneClip.initializedRocketGame = true;

		let activePart: any = null;
		let placeCount = 0;

		const moveStart = function(evt){
			var part = evt.target.parent;
			part.startPosX = evt.target.regX;
			part.startPosY = evt.target.regY;
			part.gotoAndStop(1);
			activePart = part;
		}

		const moveStop = (evt) => {
			console.info('Dropped the item')
			if(activePart) {
				var bubble = sceneClip.getChildByName('bubble');
				var partInside = bubble.getChildByName(activePart.name);
				var pos = partInside.globalToLocal(evt.stageX, evt.stageY);

				if(partInside.hitTest(pos.x, pos.y)) {
					sceneClip.playSound2("Rocketpart_place.mp3");

					partInside.children[0].alpha = 1;
					this.removeChild(activePart);
					activePart = null;
					placeCount++;

					if(placeCount === parts.length) {
						sceneClip.step();
						sceneClip.continue();
					}

					activePart = null;
					return;
				}

				//If no hits, clean up
				activePart.gotoAndStop(0);

				createjs.Tween
					.get(activePart)
					.to({x:activePart.startX, y:activePart.startY}, 300);

				sceneClip.playSound2("Rocketpart_drop.mp3");
			}

			activePart = null;
		}

		const move = (evt) => {
			if(activePart) {
				activePart.x = evt.localX;
				activePart.y = evt.localY;
			}
		}

		sceneClip.stage.addEventListener("stagemousemove", move);

		parts.forEach((partName, index) => {
			var part = this.getChildByName(partName);
			part.startX = part.x;
			part.startY = part.y;
			part.addEventListener("mousedown", moveStart);

			// we need to listen directly here
			// since the even wont bubble when we change frame later to show the draggable part
			part.children[0].addEventListener("pressup", moveStop);

			// Add a hit box for the bubble
			// this is needed since they have alpha = 0
			var bubble = sceneClip.getChildByName('bubble');
			var partInside = bubble.getChildByName(partName);
			var hit = partInside.clone();
			hit.alpha = 1;
			hit.x = partInside.regX;
			hit.y = partInside.regY;
			partInside.hitArea = hit;
			partInside.alpha = 1;
			partInside.children[0].alpha = 0;

			if(BOOK_CONFIG.debug) {
				hit.alpha = 0.1;
				partInside.addChild(hit)
			}
		})
	}
}
