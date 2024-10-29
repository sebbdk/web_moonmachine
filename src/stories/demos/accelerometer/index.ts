import { useEffect, useState } from "preact/hooks";
import { PluginListenerHandle } from '@capacitor/core';
import { Motion } from '@capacitor/motion';
import { ScreenOrientation } from '@capacitor/screen-orientation';
import { html } from "htm/preact/index.js";

let accelHandler: PluginListenerHandle;

const extraNull = {
	acceleration: { length: 0, max: 0 },
	accelerationIncludingGravity: { length: 0, max: 0 },
	rotationRate: { length: 0, max: 0 },
}

export function AccelerometerDemo() {
	const [hasPerms, setHasPerms] = useState(false);
	const [accelEvent, setAccelEvent] = useState({} as any);
	const [accelExtra, setAccelExtra] = useState(extraNull);

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
		  accelHandler = await Motion.addListener('accel', (event: any) => {
			let v = event.acceleration;
			let l = Math.sqrt(v.x*v.x + v.y*v.y + v.z*v.z);
			accelExtra.acceleration.max = l > accelExtra.acceleration.max ? l : accelExtra.acceleration.max
			accelExtra.acceleration.length = l;

			v = event.accelerationIncludingGravity;
			l = Math.sqrt(v.x*v.x + v.y*v.y + v.z*v.z);
			accelExtra.accelerationIncludingGravity.max = l > accelExtra.accelerationIncludingGravity.max ? l : accelExtra.accelerationIncludingGravity.max
			accelExtra.accelerationIncludingGravity.length = l;

			v = event.rotationRate;
			l = Math.sqrt(v.alpha*v.alpha + v.beta*v.beta + v.gamma*v.gamma);
			accelExtra.rotationRate.max = l > accelExtra.rotationRate.max ? l : accelExtra.rotationRate.max
			accelExtra.rotationRate.length = l;

			setAccelExtra(accelExtra);
			setAccelEvent(event);

			// console.log("accelExtra", accelExtra)
			// console.log('Device motion event:', event);
		  });
	}

	if(hasPerms) {
		if(!accelEvent || !accelEvent.acceleration) {
			return html`
				Device does not support accelerometer events.
			`;
		}

		return html`
			<div>Some data:</div>
			<div>
				<b>Acceleration:</b>
				<ul>
					<li>x: ${accelEvent.acceleration.x}</li>
					<li>y: ${accelEvent.acceleration.y}</li>
					<li>z: ${accelEvent.acceleration.z}</li>
					<li>length: ${accelExtra.acceleration.length}</li>
					<li>max length: ${accelExtra.acceleration.max}</li>
				</ul>
				<b>Acceleration including gravity:</b>
				<ul>
					<li>x: ${accelEvent.accelerationIncludingGravity.x}</li>
					<li>y: ${accelEvent.accelerationIncludingGravity.y}</li>
					<li>z: ${accelEvent.accelerationIncludingGravity.z}</li>
					<li>length: ${accelExtra.accelerationIncludingGravity.length}</li>
					<li>max length: ${accelExtra.accelerationIncludingGravity.max}</li>
				</ul>
				<b>Rotationrate:</b>
				<ul>
					<li>alpha: ${accelEvent.rotationRate.alpha}</li>
					<li>beta: ${accelEvent.rotationRate.beta}</li>
					<li>gamma: ${accelEvent.rotationRate.gamma}</li>
					<li>length: ${accelExtra.rotationRate.length}</li>
					<li>max length: ${accelExtra.rotationRate.max}</li>
				</ul>

				<b>For shaking the device:</b>
				<p>i can use the max acceleration length calculated by this component</p>
			</div>
		`;
	}

	return html`
		<button onClick=${getPerms}>Get permissions</button>
	`;
}
