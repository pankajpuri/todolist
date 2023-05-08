import axios from "axios";

const apiEndpoint = "/.netlify/functions/addUsers";

export default async function signUpUsers(user) {
  const { firstName, lastName, email, password } = user;
  const res = await axios.post(apiEndpoint, {
    firstName: firstName,
    lastName: lastName,
    email: email,
    password: password,
  });
  return res;
}
