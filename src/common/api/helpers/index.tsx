import axios from "axios";


export const getUsers = async () => {
   const response = await axios.get("https://jsonplaceholder.typicode.com/users");

//@ts-ignore
   const data = await response.json();

   // const transformUsers = getTransformedUsers(data);
   // setInitialUsers(transformUsers);
   // setFilteredUsers(transformUsers);
   // setIsLoading(false);
 };