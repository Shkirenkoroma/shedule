import styled from "styled-components";

export const ModalContainer = styled.div`
	position: absolute;
	backdrop-filter: blur(5px);
	top: 0;
	left: 0;
	height: 100vh;
	width: 100vw;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	div {
		text-align: center;
		border-radius: 10px;
		height: 240px;
		max-width: 300px;
		width: 100%;
		padding: 15px 20px 0px 20px;
		background-color: #9c6b9c;
		@media (max-width: 530px) {
			width: 50%;
			height: 180px;
		}
		h2 {
			margin: 0;
			@media (max-width: 530px) {
				font-size: 14px;
			}
		}
		p {
			font-family: "Edu NSW ACT Foundation", cursive;
			margin: 10px 0 15px 0;
			@media (max-width: 530px) {
				font-size: 12px;
			}
		}
		.companyAddress {
			display: inline-block;
			margin-top: 10px;
			font-family: "Edu NSW ACT Foundation", cursive;
			@media (max-width: 530px) {
				font-size: 10px;
			}
		}
	}
`;
