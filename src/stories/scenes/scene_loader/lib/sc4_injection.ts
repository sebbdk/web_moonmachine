import { BOOK_CONFIG, SceneConfig } from "../../app_config";

export function injectScene4CollectGame(sceneClip, sceneConfig:SceneConfig) {

	sceneClip.startCollectionGame = function() {
		const createjs = (window as any).createjs;

		if(this.initializedCollectionGame === true) {
			return;
		}
		this.initializedCollectionGame = true;

		this.stop();

		var partNames = [
			"middle",
			"spire",
			"bottom",
			"window"
		];

		this.collectCount = 0;
		this.canCollect = true;

		var partBox = this.getChildByName('partBox');

		const onPartClick =  (evt, partToFind) => {
			console.log("this.canCollect", this.canCollect)
			if(this.canCollect === true) {
				partToFind.play();

				this.canCollect = false;
				var partBoxPart = partBox.getChildByName(partToFind.name);

				showPartInBox(partBoxPart);
				return;
			}
		}

		const showPartInBox = (partToShow) => {
			console.log("partBox.getBounds()", partBox.getBounds())

			createjs.Tween
					.get(partBox)
					.to({ x: partBox.originalX-partBox.getBounds().width }, 300)
					.call(() => {
						createjs.Tween
							.get(partToShow)
							.to({ alpha: 1 }, 500)
							.wait(500)
							.call(() => {
								this.canCollect = true;
								createjs.Tween
									.get(partBox)
									.to({ x: partBox.originalX }, 300)
									.call(() => {
										this.collectCount++;

										if (this.collectCount == 4) {
											console.error('insert the scene transition here!!');
										}
									})
							})
					})
		}

		partBox.originalX = partBox.x;
		partNames.forEach((partName, index) => {
			partBox.getChildByName(partName).visible = true;
			partBox.getChildByName(partName).alpha = 0;

			const partToFind = this.getChildByName(partName);

			this.addClick(partToFind, (evt) => {
				onPartClick(evt, partToFind);
			}, true, "#FF9900")
		});
	}

}