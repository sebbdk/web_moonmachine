package dk.sebb.moonmachine {
	
	import flash.display.MovieClip;
	import flash.utils.setTimeout;
	import flash.events.Event;
	import flash.utils.clearTimeout;
	
	
	public class BaseGuide extends MovieClip {
		
		private var timeout:uint;
		
		public function BaseGuide () {
			this.mouseChildren = false;
			this.mouseEnabled = false;
			stop();
			timeout = setTimeout(function() {
				play();
			}, 20000);
			
			addEventListener(Event.ADDED_TO_STAGE, onAddedToStage);
		}
		
		public function onAddedToStage(evt:Event):void {
			stop();
			
			if(timeout) {
				clearTimeout(timeout);
			}
			
			timeout = setTimeout(function() {
				play();
			}, 20000);
		}
	}

	
}
