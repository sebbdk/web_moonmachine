import { BOOK_CONFIG, SceneConfig, Step } from "../../app_config";
import { injectScene4CollectGame } from "./sc4_injection";
import { injectScene5Drag } from "./sc5_injection";

interface step {
	frame: number;
	looping: boolean;
	index: number;
}

export function injectStandardSceneMethods(sceneClip, sceneConfig:SceneConfig, onStep = (step: Step) => console.error('Missing next function'), sound) {
	/**
	 * Add repeat functions
	 *
	 * These function simply repeats the frames between them n times
	 */
	sceneClip.repeatStart = 0;
	sceneClip.repeatCount = 0;

	sceneClip.repeat = function(nFrames) {
		if(this.repeatStart !== this.currentFrame) {
			this.repeatCount = nFrames;
			this.repeatStart = this.currentFrame;
		}
	}
	sceneClip.repeatEnd = function() {
		if(this.repeatCount > 0) {
			this.repeatCount--;
			this.gotoAndPlay(this.repeatStart);
			return
		}

		this.repeatStart = 0;
	}

	/**
	 * Add step related functions
	 */
	sceneClip.currentStep = 0;
	sceneClip.steps = [] as step[];
	sceneClip.addStep = function() {
		// Only registre step the first time we enter this frame
		if(!this.stepsExistsAtFrame(this.currentFrame)) {
			this.steps[this.currentStep] = {
				frame: this.currentFrame,
				looping: false,
				index: this.currentStep,
				seen: true
			};

			return;
		}
	}
	sceneClip.step = sceneClip.addStep;

	// @TODO pre-add steps
	// https://stackoverflow.com/questions/3179861/javascript-get-function-body
	// basically go though the frame methods chronologically in advance and
	// check the string version of the function to see if it adds a frame

	sceneClip.addLoopingSteps = function(count = 1) {
		// Adds a step that will loop between this method and loopingStepBoundary()

		// Only registre step the first time we enter this frame
		if(!this.stepsExistsAtFrame(this.currentFrame)) {
			console.info('Adding loop step', {count, frame: this.currentFrame})

			for(let i = 0; i < count; i++) {
				const nextStep: number = this.currentStep+i;

				this.steps[nextStep] = {
					frame: this.currentFrame,
					looping: true,
					seen: true
				};
			}
		}
	}
	sceneClip.loopStart = sceneClip.addLoopingSteps;

	sceneClip.loopingStepBoundary = function() {
		const currentStep = this.steps[this.currentStep];

		if(!currentStep) {
			return;
		}

		const isFrameInThePast = currentStep.frame < this.currentFrame;
		if (currentStep.looping == true && isFrameInThePast) {
			this.gotoAndPlay(currentStep.frame)
		}
	}
	sceneClip.loopEnd = sceneClip.loopingStepBoundary;

	sceneClip.continue = function() {
		// Prevent continuing before the step has been added
		if(sceneClip.steps[sceneClip.currentStep] == undefined) {
			console.info('blocked input!')
			return;
		}

		// prevents skipping of known steps if we have not arrived at them yet
		// @TODO, we should be able to skip steps we encountered once
		// the behavior here is also inconsistent with the looping step type
		// one way could be to wait for the dialog to finish?
		if(sceneClip.steps[sceneClip.currentStep].frame > this.currentFrame) {
			console.info('blocked input! waiting to arrive at new step first')
			return;
		}

		if(sceneClip.steps[sceneClip.currentStep].frame !== this.currentFrame) {
			this.gotoAndPlay(sceneClip.steps[sceneClip.currentStep].frame);
		}

		this.playVoice();
		this.play();

		this.currentStep += 1;

		console.info("Next step is:", this.currentStep)
	}

	sceneClip.stepsExistsAtFrame = function(frame) {
		return this.steps.find(step => step.frame === frame) !== undefined;
	}

	/**
	 * Add sound related methods
	 */
	sceneClip.playTheme = function() {
		sound.playTheme();
	}
	sceneClip.playSound = function(soundName, loop = 1) {
		//@TODO, loop is how many times to play said sound
		sound.playSound(soundName);
	}
	sceneClip.playSound2 = sceneClip.playSound; // might be needed???

	sceneClip.playVoice = function() {
		if(!sceneConfig.actions[sceneClip.currentStep]) {
			console.error('missing step???');
			return;
		}

		onStep(sceneConfig.actions[sceneClip.currentStep]);

		// @TODO Get offset from sceneConfig... maybe code this into the scene fla instead.
		// remember to handle voice offset
		// see PageContent.as
	}

	// Add misc methods
	sceneClip.screenShake = function() {}
	sceneClip.sceneEnd = function() {} // NEW, make sure we stop and wait for the user to press the next button
	sceneClip.sceneStart = function() {
		this.currentStep = 0;
	}

	// Click helper methods
	const debugHitAreas = BOOK_CONFIG.debug;//@todo, move this somewhere sensible
	sceneClip.addClick = function(btn, callback, noHide=false, color="#FFFF00") {
		if (btn.hitArea === null && !btn.addedClick) {
			btn.addedClick = true;

			// hide the animate debug area if we added one in adobe animate
			if (btn.children[0] && btn.alpha !== 1 && noHide == false) {
				btn.children[0].alpha = 0;
			}

			var hit = new createjs.Shape();
			hit.graphics.beginFill(color).drawRect(0, 0, btn.nominalBounds.width, btn.nominalBounds.height);

			// We do not need a custom hit area for things with alpha !== 0
			if(noHide == false) {
				btn.hitArea = hit;
			}

			if(debugHitAreas && !noHide) { // shows a blue area ontop of the interactable area
				hit.alpha = 0.8;
				btn.addChild(hit)
			}

			btn.addEventListener("click", callback.bind(this));
		}
	}

	sceneClip.addSwipe = function(btn, callback, distanceToSwipe = 90) {
		if (btn.hitArea !== null) {
			return;
		}

		var hit = new createjs.Shape();
		hit.graphics.beginFill("#FFFF00").drawRect(0, 0, btn.nominalBounds.width, btn.nominalBounds.height);
		btn.hitArea = hit;

		if(debugHitAreas) { // shows a blue area ontop of the interactable area
			hit.alpha = 0.8;
			btn.addChild(hit)
		}

		function getDistance(p1, p2) {
			var a = p1.x - p2.x;
			var b = p1.y - p2.y;

			return Math.sqrt( a*a + b*b );
		}

		var startPos;
		var stage = this.stage;

		function onMouseUp():void {
			if(startPos) {
				var endPos = {x:stage.mouseX, y:stage.mouseY};
				var distance = Math.abs(getDistance(startPos, endPos));

				if(distance > distanceToSwipe) {
					callback();
				}
			}
		}

		function onMouseDown(evt:MouseEvent):void {
			startPos = {x: stage.mouseX, y: stage.mouseY};
		}

		btn.addEventListener("pressup", onMouseUp);
		btn.addEventListener("mousedown", onMouseDown);
	}

	// @TODO, use arrow keys instead.. HACKS!! i tells ye
	document.addEventListener("keypress", function(event) {
		if (event.key === "Enter") {
			console.log('CONTINUE!!')
			sceneClip.continue();
		}
	});

	// scene specific injections
	injectScene4CollectGame(sceneClip, sceneConfig);
	injectScene5Drag(sceneClip, sceneConfig);
}
