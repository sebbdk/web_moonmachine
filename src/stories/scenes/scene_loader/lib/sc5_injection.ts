import { BOOK_CONFIG, SceneConfig } from "../../app_config";

export function injectScene4Drag(sceneClip, sceneConfig:SceneConfig) {
	const parts = [
		'top',
		'bottom',
		'spire',
		'window',
		'middle'
	];

	sceneClip.assembleRocket = function() {
		console.log('tryign to assemble rocket!!')

		if(sceneClip.initializedRocketGame === true) {
			return;
		}
		sceneClip.initializedRocketGame = true;

		let activePart: any = null;
		let placeCount = 0;

		const moveStart = function(evt){
			console.log('start', evt, evt.target)
			var part = evt.target.parent;
			part.startPosX = evt.target.regX;
			part.startPosY = evt.target.regY;
			part.gotoAndStop(1);
			activePart = part;
		}

		const moveStop = (evt) => {
			console.log('stop')
			if(activePart) {
				//hit test
				var bubble = sceneClip.getChildByName('bubble');
				var partInside = bubble.getChildByName(activePart.name);

				var pos = { x:evt.localX-partInside.x+partInside.regX, y: evt.localY-partInside.y+partInside.regY}

				// we need to reference the hit area directly
				// otherwise it wont work for some reason...
				if(partInside.hitArea.hitTest(pos.x, pos.y)) {
					console.log('IT IS THE THING!!!')
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

				//if no hits, clean up
				activePart.gotoAndStop(0);
				activePart.x = activePart.startX;
				activePart.y = activePart.startY;

				// @TODO, use a tween here
				//TweenLite.to(activePart, 0.5, { x:activePart.startX, y:activePart.startY});
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
		sceneClip.stage.addEventListener("pressup", moveStop);

		parts.forEach((partName, index) => {
			var part = this.getChildByName(partName);
			console.log("part", partName, part)
			part.startX = part.x;
			part.startY = part.y;
			part.addEventListener("mousedown", moveStart);

			var bubble = sceneClip.getChildByName('bubble');
			var partInside = bubble.getChildByName(partName);

			if(!partInside.hitArea) {
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

				this.stage.update(); 
			}
		})
	}
}


/*
stop();

Sc05.allowHint5 = true;

var activePart:MovieClip = null;
var placeCount:int = 0;

function moveStart(evt:MouseEvent):void {
	var part:MovieClip = evt.target as MovieClip;
	part.offsetX = evt.localX;
	part.offsetY = evt.localY;
	part.gotoAndStop(2);
	activePart = part;
}

function moveStop(evt:MouseEvent):void {
	if(activePart) {
		//hit test
		var bubble:MovieClip = getChildByName('bubble') as MovieClip;
		var partInside:MovieClip = bubble.getChildByName(activePart.name) as MovieClip;
		
		
		trace(partInside.x, partInside.y, bubble.mouseX, bubble.mouseY)
		if(partInside.hitTestObject(activePart)) {
			PageContent.playSound2("Rocketpart_place.mp3");

			partInside.alpha = 1;
			removeChild(activePart);
			activePart = null;
			placeCount++;
			
			if(placeCount === parts.length) {
				next(true);
				autoNext();
				stop();
				looping = true;
				Sc05.allowHint5 = false;
			}
			
			return;
		}
		
		//if no hits, clean up
		activePart.gotoAndStop(1);
		TweenLite.to(activePart, 0.5, { x:activePart.startX, y:activePart.startY});
		PageContent.playSound2("Rocketpart_drop.mp3");
	}
	activePart = null;

}

function move(evt:MouseEvent):void {
	if(activePart) {
		activePart.x = this.mouseX - activePart.offsetX;		
		activePart.y = this.mouseY - activePart.offsetY;
	}
}

var parts = [
	'top',
	'bottom',
	'spire',
	'window',
	'middle'
];

this.removeEventListener(MouseEvent.MOUSE_MOVE, move);
this.addEventListener(MouseEvent.MOUSE_MOVE, move);

for each(var partname:String in parts) {
	var part:MovieClip = getChildByName(partname) as MovieClip;
	part.startX = part.x;
	part.startY = part.y;
	part.removeEventListener(MouseEvent.MOUSE_DOWN, moveStart);
	part.removeEventListener(MouseEvent.MOUSE_UP, moveStop);
	part.addEventListener(MouseEvent.MOUSE_DOWN, moveStart);
	part.addEventListener(MouseEvent.MOUSE_UP, moveStop);
}
*/