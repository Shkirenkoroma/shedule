import * as S from "./row.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { getEmployer } from "redux/reducer";

const Hightlight = (props: any) => {
	const { searchValue, str } = props;
	if (!searchValue) return str;
	const regexp = new RegExp(searchValue, "ig");
	const matchValue = str.match(regexp);

	if (matchValue) {

		return str.split(regexp).map((s: any, index: any, array: any) => {
			if (index < array.length - 1) {
				const c = matchValue.shift();
				console.log("c", c);
				console.log("s", s);
				return (
					<>
						{s}
						<S.Line className={"hightlight"}>{c}</S.Line>
					</>
				);
			}
			return s;
		});
	}
	return str;
};

const Row = ({ user, setFilteredUsers, searchValue, setActiveModal }: any) => {
	const { id, name, username, email } = user;
	const dispatch = useDispatch();

	const light = useCallback(
		(str: any) => {
			return <Hightlight searchValue={searchValue} str={str} />;
		},
		[searchValue],
	);

	const deleteTodo = (id: any) => {
		setFilteredUsers((prev: any) => [
			...prev.filter((item: any) => item.id !== id),
		]);
	};

	const getDataUser = () => {
		console.log('id', id)
		dispatch(getEmployer(id));
		setActiveModal(true)
	}

	return (
		<S.Container onClick={getDataUser}>
			<S.FirstCeil>
				<S.String>{light(name)}</S.String>
			</S.FirstCeil>
			<S.SecondCeil>
				<S.String>{light(username)}</S.String>
			</S.SecondCeil>
			<S.ThirdCeil>
				<S.String>{light(email)}</S.String>
			</S.ThirdCeil>
			<FontAwesomeIcon
				icon={faTrash}
				onClick={(e) => {e.stopPropagation() 
					deleteTodo(id)}}
			/>
		</S.Container>
	);
};

export default Row;
