import * as S from "./row.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useCallback } from "react";

const Hightlight = (props:any) => {
  const { searchValue, str } = props
  if (!searchValue) return str
  const regexp = new RegExp(searchValue, 'ig')
  const matchValue = str.match(regexp)

  if (matchValue) {
    console.log('matchValue', matchValue)
    console.log('str.split(regexp)', str.split(regexp))

    return str.split(regexp).map((s:any, index:any, array:any) => {
      if (index < array.length - 1) {
        const c = matchValue.shift()
        return <>{s}<S.Line className={'hightlight'}>{c}</S.Line></>
      }
      return s
    })
  }
  return str
}


const Row = ({ user, setFilteredUsers, searchValue }: any) => {
	const { id, name, username, email } = user;

  const light = useCallback((str:any) => {
    console.log('str', str)
    return <Hightlight searchValue={searchValue} str={str} />
  }, [searchValue])


	const deleteTodo = (id: any) => {
		setFilteredUsers((prev: any) => [
			...prev.filter((item: any) => item.id !== id),
		]);
	};

	return (
		<S.Container>
			<S.FirstCeil>
				<S.String>{light(name)}</S.String>
			</S.FirstCeil>
			<S.SecondCeil>
				<S.String>{light(username)}</S.String>
			</S.SecondCeil>
			<S.ThirdCeil>
				<S.String>{light(email)}</S.String>
			</S.ThirdCeil>
			<S.Button onClick={() => deleteTodo(id)}>
				<span className="text">
					<FontAwesomeIcon icon={faTrash} />
				</span>
			</S.Button>
		</S.Container>
	);
};

export default Row;
