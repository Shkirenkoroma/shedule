import styled from "styled-components";

export const Container = styled.div`
	background-color: #e2b2e1;
	display: flex;
	justify-content: space-around;
	align-items: center;
	max-width: 900px;
	width: 100%;
	border-top-left-radius: 10px;
	border-top-right-radius: 10px;
	button {
		border: none;
		padding: 10px 10px;
		border-radius: 10px;
		background-size: 400%;
		transition: background 500ms ease-in-out;
		background-color: #cdcdcd;
		background-image: linear-gradient(45deg, #b5a1c3 50%, transparent 50%);
		background-position: 100%;
		@media (max-width: 530px) {
			padding: 3px 5px;
		}
		span {
			font-family: "Arial";
			font-style: normal;
			font-weight: 700;
			font-size: 12px;
		}
		&:hover {
			cursor: pointer;
			background-position: 0;
		}
	}
`;

export const Title = styled.h1`
	font-family: "Arial";
	font-style: normal;
	font-weight: 700;
	font-size: 32px;
	@media (max-width: 530px) {
		font-size: 12px;
	}
`;

export const Input = styled.input`
	max-width: 250px;
	width: 100%;
	border: none;
	height: 25px;
	border-radius: 8px;
	outline: none;
	border: 2px solid #cdcdcd;
	@media (max-width: 530px) {
		height: 15px;
		width: 40%;
	}
	::placeholder {
		font-size: 12px;
		font-weight: 700;
		color: #cdcdcd;
	}
`;
