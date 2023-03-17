import axios from "axios";
import { numberType, IDataEmployer } from "types";

export const getUsers = async (): Promise<IDataEmployer[] | null> => {
	const response = await axios.get(
		"https://jsonplaceholder.typicode.com/users",
	);

	return response.data;
};

export const getUser = async (
	id: numberType,
): Promise<IDataEmployer | null> => {
	const response = await axios.get(
		`https://jsonplaceholder.typicode.com/users/${id}`,
	);

	return response.data;
};
