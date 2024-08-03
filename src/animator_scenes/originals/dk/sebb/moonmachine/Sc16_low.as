package dk.sebb.moonmachine {
	
	import flash.display.MovieClip;
	import flash.media.SoundChannel;
	import flash.events.IOErrorEvent;
	import flash.media.Sound;
	import flash.media.SoundTransform;
	import flash.net.URLRequest;
	import flash.events.Event;
	
	
	public class Sc16_low extends PageContent {
		
		public var departureChannel:SoundChannel;
	
		public function Sc16_low() {
			addEventListener(Event.REMOVED_FROM_STAGE, onRemovedFromStage);
			addEventListener(Event.ENTER_FRAME, function(evt:Event) {
				if(currentFrame < 660) {
					stopDeparture();
				}
			});
		}
		
		public function onRemovedFromStage(evt:Event):void {
			stopDeparture();
		}
		
		public function playDeparture():void {
			if(departureChannel != null) {
				return;
			}
 			
			var mySound:Sound = new Sound();
			departureChannel = new SoundChannel();
			
			mySound.addEventListener(IOErrorEvent.IO_ERROR, function(evt:IOErrorEvent):void {
				trace(evt.text);
			});
			
			mySound.load(new URLRequest("../../assets/music/16 - Departure.mp3"));
			var trans:SoundTransform = new SoundTransform(1); 
			departureChannel = mySound.play(0, 100000, trans);
		}
		
		public function stopDeparture():void {
			if(departureChannel) {
				departureChannel.stop();
				departureChannel = null;
			}
		}
	}
	
}
