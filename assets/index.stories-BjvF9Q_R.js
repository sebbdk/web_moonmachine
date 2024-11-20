import{m as c}from"./index.module-CbW1K7X8.js";import{h as i,y as m}from"./hooks.module-34yJetoY.js";import{S as p}from"./index-CfvyccrB.js";import{h as t}from"./index-DRElefvR.js";import"./preact.module-CMRueUcp.js";import"./iframe-DBcJ4JOH.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-C4iS2aBk.js";function l(){const[r,n]=i(!1),[o,s]=i({});m(()=>{p.lock({orientation:"portrait"})},[]);async function a(){try{const e=window.DeviceMotionEvent;e.requestPermission&&(console.info("Requesting permission to DeviceMotionEvent"),await e.requestPermission()),n(!0)}catch(e){console.error("An error ocurred while asking for Accelerometer permission"),console.error(e);return}window.addEventListener("deviceorientation",e=>{s(e),console.log("Device orientation event:",e)})}return r?o?t`
			<div>Data output:</div>
			<div>
				<b>Rotation:</b>
				<ul>
					<li>alpha: ${o.alpha}</li>
					<li>beta: ${o.beta}</li>
					<li>gamma: ${o.gamma}</li>
				</ul>

				<b>For the rocket game:</b>
				<p>trackedEvent.gamma gives us the rotation in portrait we need.</p>
				<p>Negative towards you and positive when rotating the top of the device in landscape away from you.</p>
				<p>There is a demo here also: https://developer.mozilla.org/en-US/docs/Web/API/Device_orientation_events/Detecting_device_orientation</p>
			</div>
		`:t`
				Device does not support rotation events.
			`:t`
		<button onClick=${a}>Get permissions</button>
	`}const d=r=>c`Hello fuck you world`,k={title:"Demos/Gyroscope",component:d,argTypes:{}},v=l.bind({});v.args={};const E=["Primary"];export{v as Primary,E as __namedExportsOrder,k as default};
