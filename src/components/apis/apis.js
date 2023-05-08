import axios from "axios";

const apiEndpoint = "/.nodeTodoListApi/functions";

export default async function signUpUsers(user) {
  const { firstName, lastName, email, password } = user;
  const res = await axios.post(apiEndpoint, {
    firstName,
    lastName,
    email,
    password,
  });
  return res;
}
