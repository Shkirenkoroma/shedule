import { useState } from "react";
import Header from "./components/header/header";
import Table from "./components/table/table";
import * as S from "./App.styles";
import { useSelector } from "react-redux";

const App = () => {
	const [searchValue, setSearchValue] = useState<string>("");
	const handleUserName = (value:any) => {
		setSearchValue(value);
	};
	// const initialUsers = useSelector((state: any) => state.employers.employers);
	// const [initialUser, setInitialUsers] = useState();
	// const [filteredUser, setFilteredUsers] = useState();


	return (
		<S.Container>
			<Header onChange={handleUserName} setSearchValue={setSearchValue} searchValue={searchValue}/>
			<Table searchValue={searchValue} />
		</S.Container>
	);
};

export default App;
