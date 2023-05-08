import axios from "axios";

const apiEndpoint = "/.nodeTodoListApi/functions";

async function signUpUsers(users) {
  const { firstName, lastName, email, password } = users;
  const res = await axios.post(apiEndpoint, {
    firstName,
    lastName,
    email,
    password,
  });
  return res;
}

export default {
  signUpUsers,
};
