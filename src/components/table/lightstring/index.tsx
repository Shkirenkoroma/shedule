import * as S from "./index.styles";
import {IPropsLightString} from "types";
import { FC } from "react";

const LightString:FC<IPropsLightString> = ({ searchValue, string }):JSX.Element => {
	const regExp = new RegExp(searchValue, "ig");
	const matchValue = string.match(regExp);
	
	return (
		<div>
			{!searchValue ? (string) : matchValue ? (string.split(regExp).map((element, index, array) => {
			if (index < array.length - 1) {
				const lightstring = matchValue.shift();
				return (
					<>
						{element}
						<S.Line >{lightstring}</S.Line>
					</>
				);
			}
			return element;
		})): (null)}
		</div>
	)
}
	


export default LightString;