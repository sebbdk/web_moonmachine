package dk.sebb.moonmachine {
	
	import flash.display.MovieClip;
	import flash.events.Event;
	import flash.events.MouseEvent;
	import flash.geom.Point;
	
	
	public class Sc15 extends PageContent {
		
		public static var allowPumpNext:Boolean;
		public var hasBeenUp:Boolean = true;
		
		public function Sc15() {
			trace('I ARE DESCENDANT!!!!');
		}
		
		public function lerp( amount:Number , start:Number, end:Number ):Number {
			if ( start == end )  {
				return start ;
			}
			return ( ( 1 - amount ) * start ) + ( amount * end ) ;
		};
		
		public function prepPump():void {
			stop();

			var clip:MovieClip = getChildByName('handlepre') as MovieClip;
			var initPos:Point = new Point(clip.x - 140, clip.y + 128);
			var initTo:Point = new Point(clip.x, clip.y);
			var follow:Boolean = false;

			function GetClosetPoint(A:Point, B:Point, P:Point, segmentClamp:Boolean):Point {
				var AP:Point= P.subtract(A);
				var AB:Point = B.subtract(A);
				var ab2:Number = AB.x*AB.x + AB.y*AB.y;
				var ap_ab:Number= AP.x*AB.x + AP.y*AB.y;
				var t:Number = ap_ab / ab2;
				
				if (segmentClamp) {
					if(t < 0) {
						t = 0;
					} else if (t > 1) {
						t = 1;
					}
				}
				
				if(t <= 0.05 && hasBeenUp) {
					hasBeenUp = false;
					
					if(allowPumpNext) {
						autoNext(true);
						allowPumpNext = false;
						playSound("Balloon_pump.mp3");
					}
				} else {
					hasBeenUp = true;
					//trace('is it up!!');
				}
				
				//var Closest:Point = A + AB * t;
				var Closest:Point = A.add(new Point(AB.x * t, AB.y * t));
				return Closest;
			}

			function onMouseMove(evt:Event):void {
				if(follow) {
					var p:Point = GetClosetPoint(initPos, initTo, new Point(stage.mouseX,stage.mouseY), true);
					clip.x = lerp(0.6, clip.x, p.x);
					clip.y = lerp(0.6, clip.y, p.y);
				}
			}

			function onMouseDown(evt:Event):void {
				follow = true;
			}

			function onMouseUp(evt:Event):void {
				follow = false;
			}

			stage.addEventListener(MouseEvent.MOUSE_MOVE, onMouseMove);
			clip.addEventListener(MouseEvent.MOUSE_DOWN, onMouseDown);
			stage.addEventListener(MouseEvent.MOUSE_UP, onMouseUp);
		}
	}
	
}
