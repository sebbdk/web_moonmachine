const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./web-BZEZXNVQ.js","./index-DDmD82i1.js","./iframe-B0x0V-IK.js"])))=>i.map(i=>d[i]);
import{m as d}from"./index.module-CbW1K7X8.js";import{h as r,y as h}from"./hooks.module-34yJetoY.js";import{_ as l}from"./iframe-B0x0V-IK.js";import{r as x,S as p}from"./index-DDmD82i1.js";import{h as c}from"./index-DRElefvR.js";import"./preact.module-CMRueUcp.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-C4iS2aBk.js";const v=x("Motion",{android:()=>l(()=>import("./web-BZEZXNVQ.js"),__vite__mapDeps([0,1,2]),import.meta.url).then(n=>new n.MotionWeb),ios:()=>l(()=>import("./web-BZEZXNVQ.js"),__vite__mapDeps([0,1,2]),import.meta.url).then(n=>new n.MotionWeb),web:()=>l(()=>import("./web-BZEZXNVQ.js"),__vite__mapDeps([0,1,2]),import.meta.url).then(n=>new n.MotionWeb)}),y={acceleration:{length:0,max:0},accelerationIncludingGravity:{length:0,max:0},rotationRate:{length:0,max:0}};function _(){const[n,m]=r(!1),[a,s]=r({}),[e,u]=r(y);h(()=>{p.lock({orientation:"portrait"})},[]);async function g(){try{const o=window.DeviceMotionEvent;o.requestPermission&&(console.info("Requesting permission to DeviceMotionEvent"),await o.requestPermission()),m(!0)}catch(o){console.error("An error ocurred while asking for Accelerometer permission"),console.error(o);return}await v.addListener("accel",o=>{let t=o.acceleration,i=Math.sqrt(t.x*t.x+t.y*t.y+t.z*t.z);e.acceleration.max=i>e.acceleration.max?i:e.acceleration.max,e.acceleration.length=i,t=o.accelerationIncludingGravity,i=Math.sqrt(t.x*t.x+t.y*t.y+t.z*t.z),e.accelerationIncludingGravity.max=i>e.accelerationIncludingGravity.max?i:e.accelerationIncludingGravity.max,e.accelerationIncludingGravity.length=i,t=o.rotationRate,i=Math.sqrt(t.alpha*t.alpha+t.beta*t.beta+t.gamma*t.gamma),e.rotationRate.max=i>e.rotationRate.max?i:e.rotationRate.max,e.rotationRate.length=i,u(e),s(o)})}return n?!a||!a.acceleration?c`
				Device does not support accelerometer events.
			`:c`
			<div>Some data:</div>
			<div>
				<b>Acceleration:</b>
				<ul>
					<li>x: ${a.acceleration.x}</li>
					<li>y: ${a.acceleration.y}</li>
					<li>z: ${a.acceleration.z}</li>
					<li>length: ${e.acceleration.length}</li>
					<li>max length: ${e.acceleration.max}</li>
				</ul>
				<b>Acceleration including gravity:</b>
				<ul>
					<li>x: ${a.accelerationIncludingGravity.x}</li>
					<li>y: ${a.accelerationIncludingGravity.y}</li>
					<li>z: ${a.accelerationIncludingGravity.z}</li>
					<li>length: ${e.accelerationIncludingGravity.length}</li>
					<li>max length: ${e.accelerationIncludingGravity.max}</li>
				</ul>
				<b>Rotationrate:</b>
				<ul>
					<li>alpha: ${a.rotationRate.alpha}</li>
					<li>beta: ${a.rotationRate.beta}</li>
					<li>gamma: ${a.rotationRate.gamma}</li>
					<li>length: ${e.rotationRate.length}</li>
					<li>max length: ${e.rotationRate.max}</li>
				</ul>

				<b>For shaking the device:</b>
				<p>i can use the max acceleration length calculated by this component</p>
			</div>
		`:c`
		<button onClick=${g}>Get permissions</button>
	`}const b=n=>d`Hello fuck you world`,w={title:"Demos/Accelerometer",component:b,argTypes:{}},R=_.bind({});R.args={};const D=["Primary"];export{R as Primary,D as __namedExportsOrder,w as default};
