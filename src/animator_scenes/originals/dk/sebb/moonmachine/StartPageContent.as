package dk.sebb.moonmachine {
	
	import flash.display.MovieClip;
	import dk.sebb.moonmachine.PageContent;
	import flash.events.MouseEvent;
	import flash.events.Event;
	
	
	public class StartPageContent extends PageContent {
		
		
		public function StartPageContent() {
			getChildByName('startBtn').addEventListener(MouseEvent.CLICK, onStarBtnClick);
			addEventListener(Event.ADDED_TO_STAGE, onAddedToStage);
		}
		
		private function onAddedToStage(evt:Event):void {
			dispatchEvent(new Event('show_menu'));
		}
		
		public function onStarBtnClick(evt:Event):void {
			dispatchEvent(new Event('go_next'));
		}
	}
	
}
