import { useEffect, useState } from "preact/hooks";
import { PluginListenerHandle } from '@capacitor/core';
import { Motion } from '@capacitor/motion';
import { ScreenOrientation } from '@capacitor/screen-orientation';
import { html } from "htm/preact/index.js";

let accelHandler: PluginListenerHandle;

export function GyroscopeDemo() {
	const [hasPerms, setHasPerms] = useState(false);
	const [trackedEvent, setTrackedEvent] = useState({} as any);

	useEffect(() => {
		ScreenOrientation.lock({ orientation: 'portrait' });
	}, []);

	async function getPerms() {
		try {
			const DeviceMotionEvent = window.DeviceMotionEvent as any;

			if(DeviceMotionEvent.requestPermission) {
				console.info('Requesting permission to DeviceMotionEvent');
				await (DeviceMotionEvent as any).requestPermission();
			}

			setHasPerms(true);
		  } catch (e) {
			// Handle error
			console.error('An error ocurred while asking for Accelerometer permission')
			console.error(e)
			return;
		  }

		  // Once the user approves, can start listening:
		  window.addEventListener('deviceorientation', event => {
			setTrackedEvent(event);
			console.log('Device orientation event:', event);
		  });
	}

	if(hasPerms) {
		if(!trackedEvent) {
			return html`
				Device does not support rotation events.
			`;
		}

		return html`
			<div>Data output:</div>
			<div>
				<b>Rotation:</b>
				<ul>
					<li>alpha: ${trackedEvent.alpha}</li>
					<li>beta: ${trackedEvent.beta}</li>
					<li>gamma: ${trackedEvent.gamma}</li>
				</ul>

				<b>For the rocket game:</b>
				<p>trackedEvent.gamma gives us the rotation in portrait we need.</p>
				<p>Negative towards you and positive when rotating the top of the device in landscape away from you.</p>
				<p>There is a demo here also: https://developer.mozilla.org/en-US/docs/Web/API/Device_orientation_events/Detecting_device_orientation</p>
			</div>
		`;
	}

	return html`
		<button onClick=${getPerms}>Get permissions</button>
	`;
}

/*
	// Stop the acceleration listener
	const stopAcceleration = () => {
	if (accelHandler) {
		accelHandler.remove();
	}
	};

	// Remove all listeners
	const removeListeners = () => {
	Motion.removeAllListeners();
	};
*/