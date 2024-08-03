package dk.sebb.moonmachine {
	
	import flash.display.MovieClip;
	import flash.ui.Mouse;
	import flash.events.MouseEvent;
	import flash.geom.Point;
	import flash.events.Event;
	import flash.utils.getTimer;
	
	public class Sc13_MazePage extends PageContent {
		
		public var player:MovieClip;
		public var pathShape:MovieClip;
		public var followDebug:MovieClip;
		public var currentLine:MovieClip;
		public var isDown:Boolean;
		
		public var lines:Array = [];
		
		public function Sc13_MazePage() {
			addEventListener(Event.ADDED_TO_STAGE, onAddedToStage);
			addEventListener(Event.REMOVED_FROM_STAGE, onRemovedFromStage);
		}
		
		public function onAddedToStage(evt:Event):void {
			this.addEventListener(Event.ENTER_FRAME, onEnterFrame);
			stage.addEventListener(MouseEvent.MOUSE_DOWN, onMouseDown);
			stage.addEventListener(MouseEvent.MOUSE_UP, onMouseUp);
		}
		
		public function onRemovedFromStage(evt:Event):void {
			this.removeEventListener(Event.ENTER_FRAME, onEnterFrame);
			stage.removeEventListener(MouseEvent.MOUSE_DOWN, onMouseDown);
			stage.removeEventListener(MouseEvent.MOUSE_UP, onMouseUp);
		}		
		
		public function onMouseDown(evt:Event):void {isDown = true;}
		public function onMouseUp(evt:Event):void {isDown = false;}
		
		private function onEnterFrame(evt:Event):void {
			if(!isDown) {
				return;
			}
			
			var p:Point = new Point();
			var radius:int = 20;
			var results:Array = [];	
			
			for(var a:int = 0; a < 360; a++) {
				p.x = player.x + radius * Math.cos(a * Math.PI / 180);
				p.y = player.y + radius * Math.sin(a * Math.PI / 180);
				
				p = localToGlobal(p);
				
				if(pathShape.hitTestPoint(p.x, p.y, true)) {					
					results.push(p.clone());
				}
			}
			

			
			var closestPoint:Point = null;
			var mousePos:Point = new Point(this.mouseX, this.mouseY);
			for each(var p:Point in results) {
				if(!closestPoint || Point.distance(p, localToGlobal(mousePos)) < Point.distance(closestPoint, localToGlobal(mousePos))) {
					closestPoint = p;
				}
			}
			
			//var cursor:MovieClip = getChildByName("mcursor") as MovieClip;
			//cursor.x = mousePos.x - (cursor.width/2);
			//cursor.y = mousePos.y - (cursor.height/2);
			

			if(!closestPoint) {
				return;
			}
			
			var childHit:MovieClip;
			for (var i:uint = 0; i < pathShape.numChildren; i++){
				var child:MovieClip = pathShape.getChildAt(i) as MovieClip;
				if(child && child.name.indexOf('group') !== -1) {
					if(child.hitTestPoint(closestPoint.x, closestPoint.y, true)) {
						childHit = child;
					}
				}
			}
			
			if(childHit) {
				//trace(childHit.name, 'was hit!', closestPoint);
			}
			
			var intersection:MovieClip = pathShape.getChildByName('intersections') as MovieClip;
			var isInIntersection:Boolean = intersection.hitTestPoint(closestPoint.x, closestPoint.y, true);
			
			if(!isInIntersection && currentLine !== childHit && currentLine != null) {
				pathShape.removeChild(childHit);
				if(lines.indexOf(childHit) === -1 ) {
					lines.push(childHit);
				}
				return;
			}
			
			if(isInIntersection) {
				for each(var line:MovieClip in lines) {
					pathShape.addChild(line);
				}
			}
			
			currentLine = childHit;
			
			if(currentLine != null) {
				player.mask = getChildByName(currentLine.name + 'mask');
			}
			
			//prevent stuttering when stading still
			if(Point.distance(closestPoint, localToGlobal(mousePos)) >= Point.distance(new Point(player.x, player.y), localToGlobal(mousePos))) {
				//return;
			}

			//move the darn thing!
			if(closestPoint && Point.distance(closestPoint, localToGlobal(mousePos)) > 20)  {
				player.x = lerp(0.9, player.x, globalToLocal(closestPoint).x);
				player.y = lerp(0.9, player.y, globalToLocal(closestPoint).y);
			}
			
			var playerPos:Point = localToGlobal(new Point(player.x, player.y));
			if(player.parent && getChildByName('doneCheckBtn') && getChildByName('doneCheckBtn').hitTestPoint(playerPos.x, playerPos.y) ) {
				trace('The end!!!');
				player.parent.removeChild(player);
				MovieClip(getChildByName('endanim')).play();
				stop();
				looping = true;
			}
		}
		
		public function lerp( amount:Number , start:Number, end:Number ):Number {
			if ( start == end )  {
				return start ;
			}
			return ( ( 1 - amount ) * start ) + ( amount * end ) ;
		};
	}
}