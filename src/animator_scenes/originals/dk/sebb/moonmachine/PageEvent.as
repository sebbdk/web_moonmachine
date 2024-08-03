package dk.sebb.moonmachine
{
	import flash.events.Event;
	
	public class PageEvent extends Event
	{
		public static var ACTION:String = "action";
		
		public var frame:int;
		public function PageEvent(type:String, frame:int, bubbles:Boolean=false, cancelable:Boolean=false){
			this.frame = frame;
			super(type, bubbles, cancelable);
		}
	}
}

