const loadedScripts = [];

export async function loadScript(path) {
	if(loadedScripts.indexOf(path) > -1) {
		console.info(`Already loaded script: ${path}, ${loadedScripts.indexOf(path)}`);
		console.info("loadedScripts", loadedScripts);
		return;
	}

	console.info(`Loading script: ${path}`)
	loadedScripts.push(path);

	return new Promise((resolve, reject) => {
		const script = document.createElement("script");
		script.src = path;
		script.async = true;
		script.onload = () => {
			console.info(`Finished loading script: ${path}`)
			resolve();
		};
		script.onError = () => {
			console.error(`Error while loading script: ${path}`)
			reject();
		};

		document.body.appendChild(script);
	})
}