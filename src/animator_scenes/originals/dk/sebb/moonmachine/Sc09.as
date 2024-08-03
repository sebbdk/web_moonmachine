package dk.sebb.moonmachine {
	
	import flash.display.MovieClip;
	import flash.events.AccelerometerEvent;
	import flash.sensors.Accelerometer;
	import flash.utils.getTimer;
	import flash.events.KeyboardEvent;
	import flash.ui.Keyboard;
	import flash.events.Event;
	
	
	public class Sc09 extends PageContent {
		
		var lastShake:Number = 0;
		var shakeWait:Number = 500;
		var shaken:Boolean = true;

		var acc:Accelerometer = new Accelerometer();
		
		
		public function Sc09() {
			if(Accelerometer.isSupported) {
				acc.addEventListener(AccelerometerEvent.UPDATE, onAccUpdate);
			} else {
				trace('initlizing fake shake!');
				addEventListener(Event.ADDED_TO_STAGE, function(evt:Event) {
					stage.addEventListener(KeyboardEvent.KEY_UP, onKeyUp);
				});
			};
		}
		
		function onKeyUp(evt:KeyboardEvent):void {
			trace('key up!', evt.keyCode, Keyboard.N);
			if(evt.keyCode == Keyboard.N) {
				trace('firing fake shake on N');
				if(getTimer() - lastShake > shakeWait)
				{
					if(!shaken) {
						shaken = true;
						shakeIt();
						next(true);
						autoNext();
						play();
					}
					lastShake = getTimer();
				}
			}
		}
		

		function onAccUpdate(e:AccelerometerEvent):void
		{
			if(getTimer() - lastShake > shakeWait && (e.accelerationX >= 1.5 || e.accelerationY >= 1.5 || e.accelerationZ >= 1.5))
			{
				
				if(!shaken) {
					shaken = true;
					shakeIt();
					next(true);
					autoNext();
					play();
				}
				lastShake = getTimer();
			}
		}

		function shakeIt()
		{
			trace("device has been shaked");
		}
	}
	
}
