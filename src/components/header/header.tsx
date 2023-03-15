import * as S from "./header.styles";

const Header = ({ onChange, setSearchValue, searchValue }:any) => {
  const handleUserName = (event:any) => {
    onChange(event.target.value);
  };

  const resetState = () => {
    setSearchValue('')
    //Должен быть диспатч, который запустит снова запрос
  }

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
