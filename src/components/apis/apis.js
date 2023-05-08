import { Try } from "@mui/icons-material";
import axios from "axios";

const apiEndpoint = "/.netlify/functions/addUsers";

export default async function signUpUsers(user) {
  const { firstName, lastName, email, password } = user;
  try {
    const res = await axios.post(apiEndpoint, {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
    });
    return res;
  } catch (error) {
    console.log("error in apis:  ", res);
  }
}
