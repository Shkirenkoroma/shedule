import * as S from "./header.styles";

const Header = ({ onChange }:any) => {
  const handleUserName = (event:any) => {
    onChange(event.target.value);
  };

  return (
    <S.Container>
      <S.Title>List of users</S.Title>
      <S.Input
        onChange={handleUserName}
        placeholder="Search"
        type="text"
      />
    </S.Container>
  );
};

export default Header;
