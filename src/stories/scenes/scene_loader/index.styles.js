import styled from "styled-components";

export const StartButtonOverLay = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: 10;

	display: ${props => props.display || "flex"};
	justify-content: center;
	align-items: center;

	button {
		padding: 0.5rem;
		font-size: 1.5em;
	}
`;

export const AppStageGUIWrapper = styled.div`
	width:100vw;
	height:100vh;
	overflow: hidden;
	position: relative;

	.footer {
		margin: auto;
		position: relative;
		bottom: 8%;
		height: 23%;
		width: 100%;
		z-index: 10;
	}
`;

export const AppStageWrapper = styled.div`
	position: relative;
	background-color: #222;
	width:100%;
	height:85%;
	overflow: hidden;
	margin: auto;
`;