/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { BeatLoader } from "react-spinners";
import { ASC, tableColumns, DEFAULT, DESC } from "../../utils/utils";
import Row from "./rows/row";
import * as S from "./table.styles";

const Table = ({ searchValue }:any) => {
  const [isLoading, setIsLoading] = useState(false);
  const [initialUsers, setInitialUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [sortField, setSortField] = useState("");
  const [order, setOrder] = useState(DEFAULT);

  useEffect(() => {
    getUsers();
  }, []);

  useEffect(() => {
    setFilteredUsers(getFilteredUsers());
    setOrder(DEFAULT);
  }, [searchValue]);

  const getUsers = async () => {
    setIsLoading(true);
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    
    if (!response.ok) {
      const message = `An error has occured: ${response.status}`;
      throw new Error(message);
    }

    const data = await response.json();
    const transformUsers = getTransformedUsers(data);
    setInitialUsers(transformUsers);
    setFilteredUsers(transformUsers);
    setIsLoading(false);
  };

  const getFilteredUsers = () => {
    return initialUsers.filter((user:any) => {
      const name = user.name.toLowerCase().split(" ");
      const userName = user.username.toLowerCase().split(" ");
      const email = user.email.toLowerCase().split(" ");
      const searchWord = searchValue.toLowerCase();

      return name.some((word:any) => word.startsWith(searchWord)) || userName.some((word:any) => word.startsWith(searchWord)) || email.some((word:any) => word.startsWith(searchWord));
    });
  };

  const getTransformedUsers = (users:any) => {
    const getAddress = (address:any) => {
      const { city, street, suite } = address;
      return `${city}, ${street}, ${suite}`;
    };

    const transformedUsers = users.map((user:any) => ({
      ...user,
      address: getAddress(user.address),
      company: user.company.name,
    }));

    return transformedUsers;
  };

  const handleSortingChange = (accessor:any) => {
    const sortOrder = getSortOrder(accessor);
    setSortField(accessor);
    setOrder(sortOrder);
    setSortingUsers(accessor, sortOrder);
  };

  const setSortingUsers = (sortField:any, sortOrder:any) => {
    const sorted =
      sortOrder !== DEFAULT
        ? [...filteredUsers].sort(
          (a:any, b:any) =>
            a[sortField].localeCompare(b[sortField], "en") *
            (sortOrder === ASC ? 1 : -1),
        )
        : getFilteredUsers();

    setFilteredUsers(sorted);
  };

  const getSortOrder = (accessor:any) => {
    const result = sortField === accessor && order === ASC
      ? DESC
      : sortField === accessor && order === DESC
        ? DEFAULT
        : ASC;

    return result;
  };

  const getColumnClassName = (accessor:any) => {
    const result = sortField === accessor && order === ASC
      ? ASC
      : sortField === accessor && order === DESC
        ? DESC
        : DEFAULT;

    return result;
  };

  return (
    <S.Container>
      <S.Header>
        {tableColumns.map((column) => (
          <S.Ceil
            key={column.label}
            onClick={() => {
              handleSortingChange(column.accessor);
            }}
          >
            <S.Line>{column.label}</S.Line>
            <S.Arrow className={getColumnClassName(column.accessor)} />
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
            {filteredUsers.map((user:any) => (
              <Row user={user} key={user.id} setFilteredUsers={setFilteredUsers} searchValue={searchValue}/>
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
