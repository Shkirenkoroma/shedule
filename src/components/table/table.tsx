/* eslint-disable react-hooks/exhaustive-deps */
import Modal from "components/modal/modal";
import { FC } from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BeatLoader } from "react-spinners";
import { getEmployers } from "redux/reducer";
import { IDataEmployer, IPropsString, IState, stringType } from "types";
import { tableColumns } from "utils/utils";
import Row from "./rows/row";
import * as S from "./table.styles";

const Table:FC<IPropsString> = ({ searchValue }): JSX.Element => {
	const initialUsers = useSelector((state: IState) => state.employers.employers);
	const [initialUser, setInitialUsers] = useState<IDataEmployer[]>([]);
	const [filteredUser, setFilteredUsers] = useState<IDataEmployer[]>([]);
	const [activeModal, setActiveModal] = useState<boolean>(false);
	const dispatch = useDispatch();
	const loading = useSelector((state: IState) => state.employers.loading);

	useEffect(() => {
		setFilteredUsers(initialUsers);
		setInitialUsers(initialUsers);
	}, [initialUsers]);

	useEffect(() => {
		dispatch(getEmployers());
	}, []);

	useEffect(() => {
		setFilteredUsers(getFilteredUsers());
	}, [searchValue]);

	const getFilteredUsers = () => {
		return initialUser.filter((user: IDataEmployer) => {
			const name = user.name.toLowerCase().split(" ");
			const userName = user.username.toLowerCase().split(" ");
			const email = user.email.toLowerCase().split(" ");
			const searchWord = searchValue.toLowerCase();

			return (
				name.some((word: stringType) => word.startsWith(searchWord)) ||
				userName.some((word: stringType) => word.startsWith(searchWord)) ||
				email.some((word: stringType) => word.startsWith(searchWord))
			);
		});
	};

	return (
		<S.Container>
			<S.Header>
				{tableColumns.map((column) => (
					<S.Ceil key={column.label}>
						<S.Line>{column.label}</S.Line>
						
					</S.Ceil>
				))}
			</S.Header>
			<S.Content>
				{loading ? (
					<S.LoaderWrapper>
						<BeatLoader color="#36d7b7" />
					</S.LoaderWrapper>
				) : (
					<>
						{filteredUser.map((user) => (
							<Row
								user={user}
								key={user.id}
								setFilteredUsers={setFilteredUsers}
								searchValue={searchValue}
								setActiveModal={setActiveModal}
							/>
						))}
					</>
				)}
			</S.Content>
			<S.Count>
				<S.LineCount>Итого: {filteredUser.length}</S.LineCount>
			</S.Count>
			{activeModal ? <Modal setActiveModal={setActiveModal} /> : null}
		</S.Container>
	);
};

export default Table;
