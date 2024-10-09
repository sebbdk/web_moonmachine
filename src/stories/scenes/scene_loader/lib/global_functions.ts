// THIS WHOLE FILE IS A HACK, DEPRECATED
// being replaced by the movie clip injection script instead
// because fuck these kinda globals lol

export interface GlobalControls {
	next: () => {},
	playSound: () => {},
	playTheme: () => {},
	stopAllSound: () => {}
}

export function setUpGlobalsForScene(currentScene, onNext): GlobalControls {
	const createjs: any = window.createjs;
	const windowRef = (window as any);

	createjs.Sound.registerPlugins([createjs.WebAudioPlugin, createjs.FlashAudioPlugin]);
	createjs.Sound.alternateExtensions = ["mp3"];

	windowRef.playSound = function(name) {
		const path = `assets/SFX/${name}`

		try {
			createjs.Sound.loadComplete(path);
			createjs.Sound.play(name);
			return;
		} catch(e) {}

		function loadHandler(event) {
			var instance = createjs.Sound.play(name);
			// @TODO, needs to clear the previous sound in the same channel before playing.
		}

		createjs.Sound.on("fileload", loadHandler);
		createjs.Sound.registerSound(path, name);
	}

	windowRef.playTheme = function() {
		const fileName: any = currentScene?.music;
		const path = `assets/music/${fileName}`

		try {
			createjs.Sound.loadComplete(path);
			createjs.Sound.play(fileName);
			return;
		} catch(e) {}

		function loadHandler(event) {
			var instance = createjs.Sound.play(fileName);
			// @TODO, needs to clear the previous sound in the same channel before playing.
		}

		createjs.Sound.on("fileload", loadHandler);
		createjs.Sound.registerSound(path, fileName);
	}

	let currentVoiceInstance: any = null
	function playVoice(name, text) {
		const path = `assets/voice/${name}`;

		if(currentVoiceInstance) {
			currentVoiceInstance.stop();
		}

		currentVoiceInstance = createjs.Sound.play(path);

		//hacks
		onNext(text)
	}

	windowRef.playVoice = playVoice;

	function preload(path) {
		createjs.Sound.registerSound(path, path);
	}

	function preloadVoices() {
		currentScene?.actions.forEach(action => {
			preload( `assets/voice/${action.voice}`)
		});
	}

	preloadVoices()

	//console.log(currentScene)

	let currentAction = -1;
	windowRef.next = function() {
		currentAction += 1;

		onNext && onNext(currentScene.actions[currentAction].text);
		playVoice(currentScene.actions[currentAction].voice, "")
	}

	return {
		next: windowRef.next,
		playSound: windowRef.playSound,
		playTheme: windowRef.playTheme,
		stopAllSound: () => createjs.Sound.stop() as any
	}
}