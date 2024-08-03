package dk.sebb.moonmachine {
	
	import flash.display.MovieClip;
	import dk.sebb.moonmachine.PageContent;
	import gameobjects.*;
	import flash.events.Event;
	import flash.utils.Timer;
	import com.greensock.TweenLite;
	import flash.events.TimerEvent;
	import flash.events.KeyboardEvent;
	import flash.ui.Keyboard;
	import com.greensock.easing.Ease;
	import com.greensock.easing.EaseLookup;
	import com.greensock.easing.Linear;
	import flash.utils.getTimer;
	import com.greensock.easing.Elastic;
	import com.greensock.easing.RoughEase;
	import flash.utils.setTimeout;
	import flash.filters.ColorMatrixFilter;
	import flash.sensors.Accelerometer;
	import flash.events.AccelerometerEvent;
	
	public class Sc07_RocketGame extends PageContent {

		private var junkYard:Array;
		private var testList:Array = [];
		public var player:MovieClip;
		private var spawnTimer:Timer
		
		private var keysDown:Array = [];
		
		private var gameRunning:Boolean;
		private var lastSpawn:int = 0;
		private var gameStart:int = 0;
		
		private var accelCalibration:Number = 0;
		private var callibrate:Boolean = true;
		private var sensitivety:int = 80;
		
		public static var isDead:Boolean;
		
		private var hearts:Array = [
			'heart1',
			'heart2',
			'heart3',
			'heart4'
		];
		
		private var moveDelta:Number = 0;
		
		public function Sc07_RocketGame() {
			//create som junk we can re'use
			junkYard = [
				new SpaceJunk01(),
				new SpaceJunk02(),
				new SpaceJunk03(),
				new SpaceJunk04(),
				new SpaceJunk05(),
				new SpaceJunk06(),
				new SpaceJunk04(),
				new SpaceJunk05(),
				new SpaceJunk03(),
				new SpaceJunk06(),
				new SpaceJunk04(),
				new SpaceJunk05(),
				new SpaceJunk03(),
				new SpaceJunk01(),
				new SpaceJunk02(),
				new SpaceJunk03(),
				new SpaceJunk04(),
			];

			addEventListener(Event.ADDED_TO_STAGE, onAddedToStage);
			addEventListener(Event.REMOVED_FROM_STAGE, onRemovedToStage);
		}
		
		public override function  back():void {
			if(currentAction == 0) {
				super.back();
			} else {
				trace('dispatched back!!');
				this.dispatchEvent( new Event('reload'));
			}
		}
		
		public function onAddedToStage(evt:Event):void {
			stage.addEventListener(KeyboardEvent.KEY_DOWN, onKeyDown);
			stage.addEventListener(KeyboardEvent.KEY_UP, onKeyUp);
			addEventListener(Event.ENTER_FRAME, onEnterFrame);
		}
		
		public function onRemovedToStage(evt:Event):void {
			trace('REMOVED FROM STAGE!!!!');
			stage.removeEventListener(KeyboardEvent.KEY_DOWN, onKeyDown);
			stage.removeEventListener(KeyboardEvent.KEY_UP, onKeyUp);
			removeEventListener(Event.ENTER_FRAME, onEnterFrame);
		}
		
		public function onKeyDown(evt:KeyboardEvent):void {
			keysDown[evt.keyCode] = true;
		}

		public function onKeyUp(evt:KeyboardEvent):void {
			keysDown[evt.keyCode] = false;
		}
		
		public function spawnJunk(y:int):void {
			if(!player) {
				player = getChildByName('rocket') as MovieClip;
				player.realY = player.y;
			}
			
			if(junkYard.length > 0) {
				var junk:MovieClip = junkYard.pop();
				junk.y = y;
				junk.x = this.width + junk.width;
				junk.rotation = 0;
				
				addChild(junk);
				testList.push(junk);
				junk.ignore = false;

				TweenLite.to(junk, 6, {x:-junk.width, ease:Linear.easeNone, onComplete:function():void {
					junkYard.push(junk);
					if(junk.parent) {
						removeChild(junk);
					}
					
					if(testList.indexOf(junk) !== -1) {
						testList.splice(testList.indexOf(junk), 1);
					}
				}});
			}
		}
		
		public function startGame():void {
			//dont spawn anything the first 6 seconds
			lastSpawn = getTimer() + 12000;
			isDead = false;
			
			if(Accelerometer.isSupported) {
				var acc:Accelerometer = new Accelerometer();
				
				acc.addEventListener(AccelerometerEvent.UPDATE, function(evt:AccelerometerEvent):void {
					if(callibrate) {
						accelCalibration = 0.5421600341796875;//evt.accelerationY;
						callibrate = false;
					}
					
					var offset:Number = accelCalibration * sensitivety * -1;
					moveDelta = (evt.accelerationY * sensitivety) + offset;
					
					if(moveDelta > 0) {
						moveDelta *= 1.5;
					}
				});
			}			
			
			setTimeout(function():void {
				trace('Start game!!!');
				callibrate = true;
				next(true);
				autoNext();
			},12000);
		}
		
		public function lerp( amount:Number , start:Number, end:Number ):Number {
			if ( start == end )  {
				return start ;
			}
			return ( ( 1 - amount ) * start ) + ( amount * end ) ;
		};
		
		public function shrinkPlayer():void {
			if(!player) {
				player = getChildByName('rocket') as MovieClip;
				player.realY = player.y;
			}

			TweenLite.to(player, 1, {scaleX:0.7, scaleY:0.7, x:300, onComplete:function() {
				gameRunning = true;
				gameStart = getTimer();
			}});
		}
		
		private var tbRemoved:Array = [];
		private function onEnterFrame(evt:Event):void {
			var speed:int = 0;
			if(keysDown[Keyboard.UP] === true) {
				speed -= 15;
			}
			
			if(keysDown[Keyboard.DOWN] === true) {
				speed += 15;
			}
			
			if(moveDelta != 0) {
				//trace('delta:', Math.abs(moveDelta));
				if(Math.abs(moveDelta) > 10) {
					speed = moveDelta > 0 ? 15:-15;
				}
			}
			
			var rhb:MovieClip = getChildByName('rocketHitBox') as MovieClip;
			if(player && gameRunning && player.realY+speed < 1152 && player.realY+speed > 0) {
				player.realY += speed;
				player.y = lerp(0.1, player.y, player.realY);
				
				var rot:int = 0;
				if(speed != 0) {
					rot = 10 * (speed > 0 ? 1:-1);
				}
				TweenLite.killTweensOf(player);
				TweenLite.to(player, 0.5, {rotation:rot, x:300, ease:Linear.easeNone});
				
				rhb.x = player.x;
				rhb.y = player.y;
				rhb.scaleX = rhb.scaleY = 0.5;
				rhb.rotation = player.rotation;
			}
			
			var timeSinceLastSpawn:Number = getTimer() - lastSpawn;
			var delay:Number = 1500 - ((getTimer() - gameStart) / 100);
			delay = delay > 300 ? delay:300;
			if(gameRunning && timeSinceLastSpawn > delay) {
				spawnJunk(Math.random() * 900 + 50);
				lastSpawn = getTimer();
			}
			
			for each(var junk:MovieClip in testList) {
				//on collision!!
				var allow = junk.ignore !== true && 
					junk.parent && 
					rhb.hitTestObject(junk) && 
					junk.x > rhb.x &&
					hearts.length > 0;
				
				if(allow) {
					junk.ignore = true;
	
					//flip the junk
					var rough:RoughEase = new RoughEase(1, 20,false,Elastic.easeIn);
					var rot:int = player.y > junk.y ? -45:45;
					TweenLite.killTweensOf(junk);
					TweenLite.to(junk, 7, {rotation:rot, x: -400, ease:rough});
					
					//flash the player
					var matrix:Array = new Array();
					matrix = matrix.concat([1, 0, 0, 0, 0]); // red
					matrix = matrix.concat([1, 0, 0, 0, 0]); // green
					matrix = matrix.concat([1, 0, 0, 0, 0]); // blue
					matrix = matrix.concat([0, 0, 0, 1, 0]); // alpha
					var colorFilter:ColorMatrixFilter = new ColorMatrixFilter(matrix);
					player.filters = [colorFilter];
					
					//flash the world!
					var flashLayer:MovieClip = getChildByName('flashLayer') as MovieClip;
					flashLayer.alpha = 1;
					flashLayer.y = player.y;
					setTimeout(function():void {
						flashLayer.alpha = 0;
						flashLayer.y = -400;
						player.filters = [];
					}, 100);
					
					// break his heart
					if(hearts.length > 0) {
						var heartName:String = hearts.shift();
						var heart:MovieClip = getChildByName(heartName) as MovieClip;
						heart.visible = false;
					}
					
					player.gotoAndPlay('shake');

					if(hearts.length === 3){
						setTimeout(function() {
							shrinkPlayer();
							var hint:MovieClip = getChildByName('tiltHint') as MovieClip;
							if(hint) {
								hint.visible = true;
							}
							
							setTimeout(function() {
								hint.visible = false;
							}, 7500);
						}, 3000);
					}
					
					if(hearts.length === 0){
						player.gotoAndPlay('fallFromSky');
						next(true);
						autoNext();
						looping = true;						
						isDead = true;
						stop();
						
						trace('NO MORE LISTEN!!');
						removeEventListener(Event.ENTER_FRAME, onEnterFrame);					
					}
				}
				
				if(junk.x < -200) {
					tbRemoved.push(junk);
				}
			}
			
			for each(var junk:MovieClip in tbRemoved) {
				if(testList.indexOf(junk) !== -1) {
					testList.splice(testList.indexOf(junk), 1);
				}
				junkYard.push(junk);
				if(junk.parent) {
					removeChild(junk);
				}
			}
			tbRemoved = [];
		}
	}
	
}
