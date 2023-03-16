import styled from "styled-components";

export const Container = styled.ul`
	display: flex;
	height: 15px;
	list-style-type: none;
	padding: 17px 0;
	margin: 0;
	&:hover {
		cursor: pointer;
		background-color: #cdcdcd;
		transition: background-color 900ms;
	}
`;

export const FirstCeil = styled.li`
	width: 245px;
	height: 70px;
	text-align: center;
	margin-left: 15px;
`;

export const SecondCeil = styled.li`
	width: 245px;
	height: 70px;
	text-align: center;
	margin-left: 55px;
`;

export const ThirdCeil = styled.li`
	width: 245px;
	height: 70px;
	text-align: center;
	margin-left: 55px;
`;

export const String = styled.span`
	font-family: "Arial";
	font-style: normal;
	font-weight: 700;
	font-size: 14px;
	overflow: hidden;
	display: -webkit-box;
	-webkit-line-clamp: 1;
	-webkit-box-orient: vertical;
`;

export const Button = styled.button`
	display: flex;
	padding: 10px 15px;
	span {
		display: inline-block;
		align-items: center;
		text-align: center;
		margin-bottom: 10px;
	}
`;
