import{d as h,h as p}from"./styled-components.browser.esm-d33yEBfK.js";import{h as s,A as g,y as b}from"./compat.module-BpC84Er0.js";const r=h.div`
	position: absolute;
	bottom: 0;
	left: 0;
	width: 100%;
	background-color: rgba(0, 123, 123, 0.1);
	overflow: hidden;
	z-index: 2;

	transition: all 350ms ease-in-out;
	transform: translateY(${o=>o.position}px);

	img {
		width: 200%;
		position: relative;
		left: -1%;
		bottom: -11px;
	}

	.position-wrapper {
		position: relative;
		transition: left 350ms;
		transition: all 350ms ease-in-out;
		left: 0;

		&.scene-selector-position {
			left: -100%;
		}

		&.hidden {
			transform: translateY(calc(78%));
		}
	}

	.hidden-btn {
		position: absolute;
		background-color: rgba(0,0,123, 0.5);
		cursor: pointer
	}

	.hidden-btn:hover {
		background-color: rgba(0,123,0, 0.5);
	}

	.toggle-menu-btn {
		width: 10%;
		height: 28%;
		z-index: 8;
		top: 5%;
		left: 15%;
	}

	.chapter-selector-btn {
		width: 18%;
		height: 35%;
		z-index: 8;
		top: 54%;
		right: 2%;
	}

	.back-btn {
		width: 10%;
		height: 35%;
		z-index: 8;
		top: 54%;
		right: -10%;
	}

	.music-toggle-btn {
		width: 21%;
		height: 28%;
		z-index: 8;
		top: 25%;
		right: 13%;
	}
`;function m(o={open:!1}){let[l,e]=s(""),[t,n]=s(o.open?0:2e3);const i=g(null);b(()=>{i.current&&setTimeout(()=>{t=i.open?0:i.current.offsetHeight*.77,n(t)},250)},[]);function a(){e("scene-selector-position")}function c(){e("")}function d(){t=t===0?i.current.offsetHeight*.77:0,n(t)}return p`
		<${r} ref=${i} position=${t}>
			<div class="position-wrapper ${l}" >
				<img src="assets/gui/menu_bg.png" />
				<div class="hidden-btn toggle-menu-btn" onClick=${()=>d()}></div>
				<div class="hidden-btn chapter-selector-btn" onClick=${()=>a()}></div>
				<div class="hidden-btn back-btn" onClick=${()=>c()}></div>
				<div class="hidden-btn music-toggle-btn"></div>
			</div>
		</${r}>
	`}export{m as B};
