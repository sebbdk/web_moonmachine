package dk.sebb.moonmachine
{
	import flash.display.MovieClip;
	import flash.events.Event;
	import flash.events.KeyboardEvent;
	import flash.display.StageScaleMode;
	import flash.media.Sound;
	import flash.media.SoundChannel;
	import flash.net.URLRequest;
	import flash.events.IOErrorEvent;
	import flash.utils.setTimeout;
	import flash.utils.clearTimeout;
	import flash.ui.Multitouch;
	import flash.ui.MultitouchInputMode;
	import flash.media.SoundTransform;
	import flash.geom.Point;
	import com.greensock.TweenLite;
	
	public class PageContent extends MovieClip
	{
		[Embed(source="./book.xml", mimeType="application/octet-stream")]
		public static const BookXml:Class;

		public var looping:Boolean;
		public var paused:Boolean;
		
		public var allowContinue:Boolean = false;
		
		public var isDone:Boolean;
		
		public var actions:Array = [];
		public var currentAction = 0;
		
		public var loopStartFrame:int;
		public var breakLoopOn:int = 0;
		
		public var repeatCount:int = 0;
		public var repeatStart:int = 0;
		
		public var registrations:Array = [];
		
		public var scene:XML;
		
		public static var isEmbedded:Boolean;
		
		public var voiceChannel:SoundChannel;
		
		public function PageContent() {
			isEmbedded = !parent || parent.parent.parent != null;
			
			Multitouch.inputMode = MultitouchInputMode.GESTURE;
			
			addEventListener(Event.ADDED_TO_STAGE, onAddedToStage);
			addEventListener(Event.REMOVED_FROM_STAGE, onRemovedFromStage);
		}
		
		private function onRemovedFromStage(evt:Event):void {
		}
		
		public var _shakeTime:int;
		public var _maxShakeAmount:int;
		public var startPosition:Point;
		public var shakeTween:TweenLite;
		public function screenShake(frames:int = 30, maxShakeAmount:int = 60, offsetX:int = 10, offsetY:int = 10) : void  {
			maxShakeAmount = 60;
			frames = 30;
			
			var shakeSet:int = maxShakeAmount * 2;
			var mc:MovieClip = this;
			if (!mc._shakeTime || mc._shakeTime <= 0)
			{
				//mc.width = mc.width+shakeSet;
				//mc.height = mc.height+shakeSet;
				var rtio:Number = mc.height/ mc.width;
				mc.startPosition = new Point(-(shakeSet/2)+offsetX, -(shakeSet/2) * rtio);
				mc._shakeTime = frames;
				mc._maxShakeAmount = maxShakeAmount;
				mc.addEventListener(Event.ENTER_FRAME, handleShakeEnterFrame);
			}
			else
			{
				if(shakeTween) {
					shakeTween.kill();
				}
				
				mc.startPosition = new Point(mc.x, mc.y);
				mc._shakeTime += frames;
				mc._maxShakeAmount = maxShakeAmount;
			}
		}

		function handleShakeEnterFrame(event:Event):void
		{
			var mc:MovieClip = MovieClip(event.currentTarget);
			var shakeAmount:Number = Math.min(mc._maxShakeAmount, mc._shakeTime);
			shakeAmount = Math.random() * mc._maxShakeAmount;
			
			mc.scaleX = 1;
			mc.scaleY = 1;
			
			mc.width = mc.width+shakeAmount;
			mc.height = mc.height+shakeAmount;
			
			mc.x = -shakeAmount/2;
			mc.y = 0;//-shakeAmount/2;

			mc._shakeTime--;

			if (mc._shakeTime <= 0)
			{
				mc._shakeTime = 0;
				mc.removeEventListener(Event.ENTER_FRAME, handleShakeEnterFrame);
				
				shakeTween = TweenLite.to(mc, 0.2, {scaleY:1, scaleX:1, x:0, y:0});
			/*	mc.scaleX = 1;
				mc.scaleY = 1;
				mc.x = 0;
				mc.y = 0;*/
			}
		}
		
		private function onAddedToStage(evt:Event):void {	
			if(!isEmbedded) {
				stage.scaleMode = StageScaleMode.SHOW_ALL;
				
				var book:XML = XML(new BookXml());
				for each(var scene:XML in book.scene) {
					var index:int = stage.loaderInfo.url.indexOf(scene.attribute('swf'));
					if(index != -1) {
						this.scene = scene;
					}
				}
				
				stage.addEventListener(KeyboardEvent.KEY_UP, enableTestKeys);
			}
			
			trace('added to stage!!');
			trace('ACTION!!!', currentAction);
			currentAction = 0;
			allowContinue = false;
			loopStartFrame = 0;
			breakLoopOn = 0;
			looping = false;
			registrations = [];
			actions = [];

			//autoNext(true);
			next();
		}
		
		public function enableTestKeys(evt:KeyboardEvent):void {
			if(evt.keyCode === 37) {//key left
				back();
			}
			
			if(evt.keyCode === 39) {//key right
				next();
			}
		}
		
		public function next(arg:* = null):void {
			if(looping || arg === true) {
				currentAction++;
				looping = false;
			}
			
			if(!isEmbedded && this.scene && this.scene.action[currentAction]) {
				trace(currentAction + ': ' + this.scene.action[currentAction].copy);
				trace(this.scene.action[currentAction].copy.attribute('speech'));
				
				playVoice();
			} 
		}
		
		public function autoNext(arg:* = null):void {
			if(arg != null) {
				trace('EVENT DRIVEN AUTONEXT!!');
				next(true);
				play();
			}
			
			if(!registrations[currentFrame]) {
				actions.push({
					frame:currentFrame,
					end:currentFrame,
					loop:false
				});
				
				registrations[currentFrame] = true;
			}
			
			trace('event dispatced!!!!!!');
			dispatchEvent(new Event("next"));
		}
		
		public function nextPage():void {
			stop();
			dispatchEvent(new Event("next_page"));
			trace('Disptched new page event');
		}

		public var timeoutID:uint;
		function playVoice(fileName:String = null):void {
			//return;
			
			fileName = fileName ? fileName:this.scene.action[currentAction].attribute('speech');
			var offset:Number = parseInt(this.scene.action[currentAction].attribute('speech-offset'));
			if(!offset) {offset = 10;}
			
			if(timeoutID) {
				clearTimeout(timeoutID);
			}

			timeoutID = setTimeout(function():void {
				if(voiceChannel) {
					voiceChannel.stop();
				}
				
				if(!fileName || fileName == "") {
					return;
				}
				
				var path:String = "../app-source/src/assets/voice/" + fileName;
				
				var mySound:Sound = new Sound();
				voiceChannel = new SoundChannel();
				
				mySound.addEventListener(IOErrorEvent.IO_ERROR, function(evt:IOErrorEvent):void {
					trace(evt.text);
				});
				
				mySound.load(new URLRequest(path));
				voiceChannel = mySound.play();
			}, offset);
		}		
		
		function playSound(fileName:String, loop:int = 0):void {
			if(!isEmbedded) {
				return;
			}
			
			var mySound:Sound = new Sound();
			var myChannel:SoundChannel = new SoundChannel();
			
			mySound.addEventListener(IOErrorEvent.IO_ERROR, function(evt:IOErrorEvent):void {
				trace(evt.text);
			});
			
			mySound.load(new URLRequest("../../assets/SFX/" + fileName));
			var trans:SoundTransform = new SoundTransform(0.6); 
			myChannel = mySound.play(0, loop, trans);
			
		}
		
		public static function playSound2(fileName:String):void {
			if(!isEmbedded) {
				return;
			}
			
			var mySound:Sound = new Sound();
			var myChannel:SoundChannel = new SoundChannel();
			
			mySound.addEventListener(IOErrorEvent.IO_ERROR, function(evt:IOErrorEvent):void {
				trace(evt.text);
			});
			
			mySound.load(new URLRequest("../../assets/SFX/" + fileName));
			//mySound.load(new URLRequest("../app-source/src/assets/SFX/" + fileName));
			var trans:SoundTransform = new SoundTransform(0.6); 
			myChannel = mySound.play(0, 1, trans);
		}
		
		public function back():void {
			if(currentAction > 0) {
				looping = false;
				currentAction--;
			}
			
			if(!isEmbedded && this.scene.action[currentAction]) {
				trace(currentAction + ': ' + this.scene.action[currentAction].copy);
				playVoice();
			}
			
			if(currentAction > 0 && actions[currentAction]) {
				if(actions[currentAction-1] && actions[currentAction-1].frame < actions[currentAction].frame) {
					trace(actions[currentAction-1]);
					gotoAndPlay(actions[currentAction-1].end+1);
				} else {
					gotoAndPlay(actions[currentAction].frame);
				}
			} else {
				gotoAndPlay(actions[0].frame);
				currentAction = 0;
			}
		}
		
		public function repeat(count:int = 1):void {
			if(repeatStart !== currentFrame) {
				repeatCount = count;
				repeatStart = currentFrame;
			}
		} 
		
		public function repeatEnd():void {
			if(repeatCount > 0) {
				repeatCount--;
				gotoAndPlay(repeatStart);
			} else {
				repeatStart = -1;
			}
		} 
		
		public function loopFrom():void {
			actions[currentAction].loopFrom = currentFrame;
		}

		public function loopStart(count:int = 1):void {
			if(registrations[currentFrame]) {
				return;
			}
			
			while(count > 0) {
				actions.push({
					frame:currentFrame,
					loop:true
				});

				count--;
			}
			
			registrations[currentFrame] = true;
		}

		public function loopEnd():void {
			var action:Object = actions[currentAction];
			if(action !== null && action.loop && action.frame < currentFrame) {
				action.end = currentFrame;
				
				if(action.loopFrom) {
					gotoAndPlay(action.loopFrom);
				} else {
					gotoAndPlay(action.frame);
				}
				
				looping = true;
			}
		}
	}
}