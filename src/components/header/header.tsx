import * as S from "./header.styles";
import { useDispatch } from "react-redux";
import { getEmployers } from "redux/reducer";
const Header = ({ onChange, setSearchValue, searchValue }: any) => {
	const dispatch = useDispatch();

	const handleUserName = (event: any) => {
		onChange(event.target.value);
	};

	const resetState = () => {
		setSearchValue("");

		dispatch(getEmployers());
    console.log('getEmployers()', getEmployers())
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
			<button onClick={resetState}>Сбросить</button>
		</S.Container>
	);
};

export default Header;
