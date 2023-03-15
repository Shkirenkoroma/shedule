import * as S from "./row.styles";

const Row = ({ user }:any) => {
  const { name, username, email  } = user;

  return (
    <S.Container>
      <S.FirstCeil>
        <S.String>{name}</S.String>
      </S.FirstCeil>
      <S.SecondCeil>
        <S.String>{username}</S.String>
      </S.SecondCeil>
      <S.ThirdCeil>
        <S.String>{email}</S.String>
      </S.ThirdCeil>
    </S.Container>
  );
};

export default Row;
