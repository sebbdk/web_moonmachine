import { html } from "htm/preact/index.js";
import styled from "styled-components";
import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
	@font-face {
		font-family: "obelisque";
		src: url('assets/fonts/obelisque.otf'), format("opentype");;
		font-weight: normal;
		font-style: normal;
	}

	@font-face {
		font-family: "neucha";
		src: url('assets/fonts/neucha.otf'), format("opentype");;
		font-weight: normal;
		font-style: normal;
	}
`;

const StoryTellerDiv = styled.div`
	width: 100%;
	position: relative;

	.bg {
		width: 102%;
		max-height: 100%;
		margin-left: -1%;
	}

	.textarea {
		position: absolute;
		left: 15%;
		background-color: rgba(255, 255, 255, 0.2);
		top: 20%;
		right: 15%;
		bottom: 15%;
		text-align: center;
		font-size: 1.2em;
		display: flex;
		justify-content: center;
		align-items: center;
		font-family: "neucha";
		color: #eee;

		p {
			margin: 0;
			padding: 0;
		}
	}

	.hidden-btn {
		position: absolute;
		background-color: rgba(0,0,123, 0.5);
		cursor: pointer

	}

	.hidden-btn:hover {
		background-color: rgba(123,0,0, 0.5);
	}

	.next-btn {
		width: 11%;
		height: 60%;
		z-index: 8;
		top: 28%;
		right: 0%;
	}

	.prev-btn {
		width: 11%;
		height: 60%;
		z-index: 8;
		top: 28%;
		left: 0%;
	}
`;

export interface StoryTellerArgs {
	onPrev:  () => void;
	onNext:  () => void;
	text: string;
}

export function StoryTeller(args: StoryTellerArgs) {
	return html`
		<${StoryTellerDiv}>
			<${GlobalStyle} />

			<div>
				<img class="bg" src="assets/gui/storyteller_box.png" />
				<div class="textarea">
					<p>
						${args.text}
					</p>
				</div>
				<div class="hidden-btn prev-btn" onClick=${() => args.onPrev && args.onPrev()}></div>
				<div class="hidden-btn next-btn" onClick=${() => args.onNext && args.onNext()}></div>
			</div>
		</${StoryTellerDiv}>
	`;
}