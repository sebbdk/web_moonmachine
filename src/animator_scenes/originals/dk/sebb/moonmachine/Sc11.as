package dk.sebb.moonmachine {
	
	import dk.sebb.moonmachine.PageContent;
	import flash.display.MovieClip;
	import flash.events.MouseEvent;
	import flash.geom.Point;
	import flash.events.Event;
	import flash.utils.setTimeout;
	
	
	public class Sc11 extends PageContent {
		
		public var pump:MovieClip;
		public var ballon:MovieClip;
		
		public var pumpFollow:Boolean;
		public var pumpOffsetY:int;
		public var lastPos:int;
		
		public var hasBenUp:Boolean;
		public var hasBenDown:Boolean;
		public var waitforpump:Boolean;
		public var allowPump:Boolean;
		
		public function Sc11() {
			ballon.addEventListener("blownup", onBallonBlownUp);
			
			addEventListener(Event.ADDED_TO_STAGE, onAddedToStage);
			addEventListener(Event.REMOVED_FROM_STAGE, onRemovedFromStage);
		}
		
		public function onAddedToStage(evt:Event):void {
			this.addEventListener(Event.ENTER_FRAME, onEnterFrame);
			stage.addEventListener(MouseEvent.MOUSE_UP, onPumpMouseUp);
			stage.addEventListener(MouseEvent.MOUSE_DOWN, onPumpMouseDown);
		}
		
		public function onRemovedFromStage(evt:Event):void {
			this.removeEventListener(Event.ENTER_FRAME, onEnterFrame);
			stage.removeEventListener(MouseEvent.MOUSE_UP, onPumpMouseUp);
			stage.removeEventListener(MouseEvent.MOUSE_DOWN, onPumpMouseDown);
		}
		
		private function onBallonBlownUp(evt:Event):void {
			this.allowPump = false;
			next(true);
			autoNext();
			play();
		}
		
		public function startPump():void {
			stop();
			this.allowPump = true;
			ballon.done = false;
			ballon.gotoAndStop(1);
		}

		private function onEnterFrame(evt:Event):void {
			if(pumpFollow && allowPump) {
				var newPos = this.mouseY- pumpOffsetY;
				
				if(newPos < 637) {
					lastPos = 637;
					hasBenUp = true;
				} else if(newPos > 731) {
					lastPos = 731;
					if(hasBenUp) {
						hasBenDown = true;
					}
				} else {
					lastPos = newPos;
				}

				if(hasBenDown && hasBenUp) {
					hasBenDown = false;
					hasBenUp = false;
					ballon.play();
				}
				
				pump.y = lerp(0.6, pump.y, lastPos);
			}
			
			if(ballon.done === true) {
				ballon.done = false;
			}
		}	
		
		public function lerp( amount:Number , start:Number, end:Number ):Number {
			if ( start == end )  {
				return start ;
			}
			return ( ( 1 - amount ) * start ) + ( amount * end ) ;
		};
		
		private function onPumpMouseUp(evt:MouseEvent):void {
			pumpFollow = false;
		}		
		
		private function onPumpMouseDown(evt:MouseEvent):void {
			pumpFollow = true;
			pumpOffsetY = evt.localY;
			
			trace('DOWN!!');
		}
	}
	
}
