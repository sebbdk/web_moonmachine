import { html } from "htm/preact/index.js";
import { useState } from "react";
import styled from "styled-components";

const BottomMenuDiv = styled.div`
	position: absolute;
	bottom: 0;
	left: 0;
	width: 100%;
	background-color: rgba(0, 123, 0, 0.4);
	overflow: hidden;

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
`;

export function BottomMenu() {
	const [ positionClass, setPositionClass ] = useState("")

	function showSceneSelector() {
		setPositionClass("scene-selector-position")
	}

	function showDefaultMain() {
		setPositionClass("")
	}

	function toggleMenuVisible() {
		setPositionClass(positionClass === "hidden" ? "" : "hidden")
	}

	return html`
		<${BottomMenuDiv}>
			<div class="position-wrapper ${positionClass}" >
				<img src="assets/gui/menu_bg.png" />
				<div class="hidden-btn toggle-menu-btn" onClick=${() => toggleMenuVisible()}></div>
				<div class="hidden-btn chapter-selector-btn" onClick=${() => showSceneSelector()}></div>
				<div class="hidden-btn back-btn" onClick=${() => showDefaultMain()}></div>
				<div class="hidden-btn music-toggle-btn"></div>
			</div>
		</${BottomMenuDiv}>
	`;
}