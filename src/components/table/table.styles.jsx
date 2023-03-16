import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 900px;
	background-color: #ffffff;
	border-bottom-left-radius: 15px;
	border-bottom-right-radius: 15px;
`;

export const Ceil = styled.li`
	width: 460px;
	cursor: pointer;
	color: black;
	display: flex;
	justify-content: center;
`;

export const Count = styled.div`
	position: relative;
	left: 380px;
`;

export const Line = styled.span`
	font-family: "Arial";
	font-style: normal;
	font-weight: 700;
	font-size: 16px;
	color: #cdcdcd;
`;

export const LineCount = styled.span`
	font-family: "Arial";
	font-style: normal;
	font-weight: 700;
	font-size: 20px;
	color: #000;
`;

export const Input = styled.input`
	width: 250px;
	height: 30px;
`;

export const LineHeader = styled.span`
	font-family: "Arial";
	font-style: normal;
	font-weight: 700;
	font-size: 24px;
`;

export const Header = styled.ul`
	display: flex;
	width: 900px;
	height: 35px;
	border-bottom: 2px solid #f5f5f5;
	padding: 0px;
`;

export const Content = styled.div`
	width: 900px;
	overflow: overlay;
	height: 530px;
`;

export const LoaderWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 100%;
`;