export function injectStandardSceneMethods(sceneClip) {
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
	sceneClip.stepHistory = [0];
	sceneClip.currentStep = 0;
	sceneClip.addStepAtFrame = function() {
		// Only add frame the first time, user might go back and forward in steps
		if (this.stepHistory.indexOf(this.currentFrame) === -1) {
			this.stepHistory.push(this.currentFrame);
		}
	}
	sceneClip.incrementStep = function() {
		this.currentStep += 1;
	}
	sceneClip.goToNextStep = function() {
		// if we have the next step
		const nextStepFrame = sceneClip.stepHistory.length[this.currentStep+1];
		if(nextStepFrame !== undefined) {

			this.gotoAndPlay(nextStepFrame);
			this.currentStep += 1;
		}
	}
	sceneClip.goToPrevStep = function() {
		if (this.currentStep > 0) {
			this.currentStep -= 1;
		}

		this.gotoAndPlay(this.stepHistory.at(this.currentStep))
	}

	// Loops between to frame numbers
	// The loop is broken when when next is called
	sceneClip.loopStart = function(nSteps) {
		//add nSteps to end of stepHistory at current frame
	}
	sceneClip.loopEnd = function() {
		// if currently at a looping step, then go back to loopstartframe
	}
	// i think this is basically what addStepAtFrame does
	// it also calls next and then plays the voice
	sceneClip.autoNext = function() {}//???

	/**
	 * Add sound related methods
	 */
	sceneClip.playTheme = function() {}
	sceneClip.playSound = function(soundName, loop = 1) {} // loop is how many times to play said sound
	sceneClip.playVoice = function() {
		// Get offset from sceneConfig... maybe code this into the scene fla instead.
		// remember to handle voice offset
		// see PageContent.as
	}

	// Add misc methods
	sceneClip.screenShake = function() {}
	sceneClip.sceneEnd = function() {} // NEW, make sure we stop and wait for the user to press the next button
}
