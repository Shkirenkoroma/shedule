import { useState } from "react";
import Header from "./components/header/header";
import Table from "./components/table/table";
import * as S from "./App.styles";

const App = () => {
	const [searchValue, setSearchValue] = useState<string>("");
	const handleUserName = (value:any) => {
		setSearchValue(value);
	};

	return (
		<S.Container>
			<Header onChange={handleUserName} setSearchValue={setSearchValue} searchValue={searchValue}/>
			<Table searchValue={searchValue} />
		</S.Container>
	);
};

export default App;
