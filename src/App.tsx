import { useState } from "react";
import Header from "./components/header/header";
import Table from "./components/table/table";
import * as S from "./App.styles";
import { useSelector } from "react-redux";
import { stringType } from "types";
import { FC } from 'react'

const App:FC = ():JSX.Element => {
	const [searchValue, setSearchValue] = useState<string>("");
	
	const handleUserName = (value:stringType) => {
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
