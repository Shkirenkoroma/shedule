import * as S from "./header.styles";
import { useDispatch } from "react-redux";
import { getEmployers } from "redux/reducer";
import { FC } from "react";
import { IPropsHeader } from "types";

const Header: FC<IPropsHeader> = ({
	onChange,
	setSearchValue,
	searchValue,
}): JSX.Element => {
	const dispatch = useDispatch();

	const handleUserName = (event: React.FormEvent<HTMLFormElement>) => {
		onChange(event.currentTarget.value);
	};

	const resetState = () => {
		setSearchValue("");
		dispatch(getEmployers());
	};

	return (
		<S.Container>
			<S.Title>List of users</S.Title>
			<S.Input
				onChange={handleUserName}
				placeholder="Search"
				type="text"
				value={searchValue}
			/>
			<button onClick={resetState}>
				<span>Сбросить</span>
			</button>
		</S.Container>
	);
};

export default Header;
