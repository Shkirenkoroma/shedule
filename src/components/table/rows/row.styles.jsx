import styled from "styled-components";

export const ContainerList = styled.ul`
	display: flex;
	width: 100%;
	height: 15px;
	list-style-type: none;
	padding: 17px 0;
	margin: 0;
	.icon {
		margin-left: 10px;
	}
	@media (max-width: 768px) {
		font-size: 10px;
	}
	@media (max-width: 530px) {
		font-size: 8px;
	}
	&:hover {
		cursor: pointer;
		background-color: #b5a1c3;
		transition: background-color 900ms;
	}
`;

export const Container = styled.div`
	display: flex;
	align-items: center;
	width: 100%;
`;
export const FirstCeil = styled.li`
	width: 245px;
	height: 70px;
	text-align: center;
	margin-left: 25px;
	@media (max-width: 768px) {
		margin-left: 5px;
	}
`;

export const SecondCeil = styled.li`
	width: 245px;
	height: 70px;
	text-align: center;
	margin-left: 55px;
	@media (max-width: 768px) {
		margin-left: 15px;
	}
`;

export const ThirdCeil = styled.li`
	width: 245px;
	height: 70px;
	text-align: center;
	margin-left: 55px;
	@media (max-width: 768px) {
		margin-left: 15px;
	}
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
