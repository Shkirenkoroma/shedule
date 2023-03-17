import * as S from "./row.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { getEmployer } from "redux/reducer";
import LightString from "../lightstring";
import { IDataEmployer, IPropsRow, numberType, stringType } from "types";
import { FC } from "react";

const Row: FC<IPropsRow> = ({
	user,
	setFilteredUsers,
	searchValue,
	setActiveModal,
}): JSX.Element => {
	const { id, name, username, email } = user;
	const dispatch = useDispatch();

	const light = useCallback(
		(string: stringType) => {
			return <LightString searchValue={searchValue} string={string} />;
		},
		[searchValue],
	);

	const deleteTodo = (id: numberType) => {
		setFilteredUsers((prev: IDataEmployer[]) => [
			...prev.filter((item) => item.id !== id),
		]);
	};

	const getDataUser = () => {
		dispatch(getEmployer(id));
		setActiveModal(true);
	};

	return (
		<S.Container>
			<S.ContainerList onClick={getDataUser}>
				<S.FirstCeil>{light(name)}</S.FirstCeil>
				<S.SecondCeil>{light(username)}</S.SecondCeil>
				<S.ThirdCeil>{light(email)}</S.ThirdCeil>
				<FontAwesomeIcon
					icon={faTrash}
					className="icon"
					onClick={(e) => {
						e.stopPropagation();
						deleteTodo(id);
					}}
				/>
			</S.ContainerList>
		</S.Container>
	);
};

export default Row;
