import axios from "axios";

export const getUsers = async () => {
	const response = await axios.get(
		"https://jsonplaceholder.typicode.com/users",
	);

	return response.data;
};

export const getUser = async (id: any) => {
	const response = await axios.get(
		`https://jsonplaceholder.typicode.com/users/${id}`,
	);

	console.log("response fetch", response);

	return response.data;
};

export const getTransformedUsers = (data: any) => {
	console.log('dataadfredss', data.address)
	const getAddress = (address: any) => {
		const { city, street, suite } = address;
		return `${city}, ${street}, ${suite}`;
	};

	const transformedUsers = (data: any) => ({
		address: getAddress(data.address),
		company: data.company.name,
	});
console.log('transformedUsers', transformedUsers)
	return transformedUsers;
};

