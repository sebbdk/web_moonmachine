package dk.sebb.moonmachine {
	
	import flash.display.MovieClip;
	import com.greensock.TweenLite;
	
	
	public class Sc10 extends PageContent {
		
		public var activePart:MovieClip = null;
		public var placeCount:int = 0;
		public static var allowHint10:Boolean = false;
		
		public var parts = [
			'SpeederBroken01',
			'SpeederBroken02',
			'SpeederBroken03',
			'SpeederBroken04',
			'SpeederBroken05'
		];
		
		function Sc10() {
			Sc10.allowHint10 = false;
		}
		
		public function fixPuzzle() {
			trace('PUZZLE TIME!!!');
			stop();
			allowHint10 = true;
			placeCount = 0;
			
			var bubble:MovieClip = getChildByName('speederUI') as MovieClip;
			bubble.gotoAndStop(1);
			
			this.removeEventListener(MouseEvent.MOUSE_MOVE, move);
			this.addEventListener(MouseEvent.MOUSE_MOVE, move);
			
			parts.forEach(function(partname:String, index:int, all:Array):void {
				var part:MovieClip = getChildByName(partname) as MovieClip;
				part.startX = part.x;
				part.startY = part.y;
				part.removeEventListener(MouseEvent.MOUSE_DOWN, moveStart);
				part.addEventListener(MouseEvent.MOUSE_DOWN, moveStart);
			});
			
			stage.removeEventListener(MouseEvent.MOUSE_UP, moveStop);
			stage.addEventListener(MouseEvent.MOUSE_UP, moveStop);
		}
		
		function moveStart(evt:MouseEvent):void {
			var part:MovieClip = evt.target as MovieClip;
			part.offsetX = evt.localX;
			part.offsetY = evt.localY;
			part.gotoAndStop(2);
			activePart = part;
			
			PageContent.playSound2("Rocketpart_take.mp3");
		}

		function moveStop(evt:MouseEvent):void {
			if(activePart) {
				//hit test
				var bubble:MovieClip = getChildByName('speederUI') as MovieClip;
				var partInside:MovieClip = bubble.getChildByName(activePart.name) as MovieClip;
				
				
				trace(partInside.x, partInside.y, bubble.mouseX, bubble.mouseY)
				//if(bubble.hitTestPoint(stage.mouseX, stage.mouseY, true)) {
				if(partInside.hitTestObject(activePart)) {
					PageContent.playSound2("Rocketpart_place.mp3");

					partInside.alpha = 1;
					removeChild(activePart);
					activePart = null;
					placeCount++;
					
					if(placeCount === parts.length) {
						play();
						
						next(true);
						
						actions.push({
							frame:currentFrame-1,
							loop:false
						});
						dispatchEvent(new Event("next"));
						
						
						speederUI.play();
						placeCount = 0;
						allowHint10 = false;
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
	}
	
}
