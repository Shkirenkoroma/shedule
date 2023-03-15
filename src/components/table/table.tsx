/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BeatLoader } from "react-spinners";
import { getEmployers } from "redux/reducer";
import { tableColumns } from "../../utils/utils";
import Row from "./rows/row";
import * as S from "./table.styles";

const Table = ({ searchValue }: any) => {
	const [isLoading, setIsLoading] = useState(false);
	const [initialUsers, setInitialUsers] = useState([]);
	const [filteredUsers, setFilteredUsers] = useState([]);
	const dispatch = useDispatch();
	const selector = useSelector((state) => state);

	useEffect(() => {
		dispatch(getEmployers());
	}, []);

	useEffect(() => {
		setFilteredUsers(getFilteredUsers());
		
	}, [searchValue]);

	const getFilteredUsers = () => {
		return initialUsers.filter((user: any) => {
			const name = user.name.toLowerCase().split(" ");
			const userName = user.username.toLowerCase().split(" ");
			const email = user.email.toLowerCase().split(" ");
			const searchWord = searchValue.toLowerCase();

			return (
				name.some((word: any) => word.startsWith(searchWord)) ||
				userName.some((word: any) => word.startsWith(searchWord)) ||
				email.some((word: any) => word.startsWith(searchWord))
			);
		});
	};

	const getTransformedUsers = (users: any) => {
		const getAddress = (address: any) => {
			const { city, street, suite } = address;
			return `${city}, ${street}, ${suite}`;
		};

		const transformedUsers = users.map((user: any) => ({
			...user,
			address: getAddress(user.address),
			company: user.company.name,
		}));

		return transformedUsers;
	};


	return (
		<S.Container>
			<S.Header>
				{tableColumns.map((column) => (
					<S.Ceil
						key={column.label}
					
					>
						<S.Line>{column.label}</S.Line>
						<S.Arrow  />
					</S.Ceil>
				))}
			</S.Header>
			<S.Content>
				{isLoading ? (
					<S.LoaderWrapper>
						<BeatLoader color="#36d7b7" />
					</S.LoaderWrapper>
				) : (
					<>
						{filteredUsers.map((user: any) => (
							<Row
								user={user}
								key={user.id}
								setFilteredUsers={setFilteredUsers}
								searchValue={searchValue}
							/>
						))}
					</>
				)}
			</S.Content>
			<S.Count>
				<S.LineCount>Итого: {filteredUsers.length}</S.LineCount>
			</S.Count>
		</S.Container>
	);
};

export default Table;
