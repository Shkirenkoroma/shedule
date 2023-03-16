import styled from "styled-components";

export const Container = styled.div`
	background-color: #f5f5f5;
	display: flex;
	justify-content: space-around;
	align-items: center;
	width: 900px;
	border-top-left-radius: 10px;
	border-top-right-radius: 10px;
`;

export const Title = styled.h1`
	font-family: "Arial";
	font-style: normal;
	font-weight: 700;
	font-size: 32px;
`;

export const Input = styled.input`
	width: 250px;
	border: none;
	height: 20px;
	border-radius: 3px;
	outline: none;
	border: 2px solid #cdcdcd;
	::placeholder {
		font-size: 12px;
		font-weight: 700;
		color: #cdcdcd;
	}
`;
