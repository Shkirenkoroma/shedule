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
		background-color: #cdcdcd;
		.addressStreet {
		}
		.companyAddress {
			display: inline-block;
			margin-top: 10px;
			font-family: "Edu NSW ACT Foundation", cursive;
		}
		.addressStreet {
		}
		h2 {
			margin: 0;
		}
		p {
			font-family: "Edu NSW ACT Foundation", cursive;
			margin: 10px 0 15px 0;
		}
	}
`;
