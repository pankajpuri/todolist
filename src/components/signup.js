import React from "react";
import axios from "axios";
import { useState } from "react";
import {
  Avatar,
  Box,
  Button,
  Grid,
  Container,
  CssBaseline,
  Link,
  Typography,
  ThemeProvider,
} from "@mui/material";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import { createTheme } from "@mui/material/styles";
import Input from "./common/input";
//import signUpUsers from "./apis/apis";

const theme = createTheme();

function SignUp() {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("I am in handle submit function-> users:-> ", user);
    const { firstName, lastName, email, password } = user;
    await axios
      .post("/.netlify/functions/addUsers", {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
      })
      .then((res) => console.log("got result :", res))
      .catch((err) => console.log("getting error: ", err));

    // const data = new FormData(event.currentTarget);
    // console.log({
    //   email: data.get("email"),
    //   // password:data.get("password")
    // });

    //call the api to handle opreation
    //save the data
    //render page to login dashboard
  };
  const handleChange = (event) => {
    const { name, value } = event.currentTarget;

    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
    console.log("users", user);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="lg" sx={{ minHeight: "500px" }}>
        <CssBaseline />
        <Box
          sx={{
            width: "100%",
            height: "50%",
            marginTop: 6,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOpenIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign Up
          </Typography>
          <Box
            component="form"
            sx={{
              mt: 1,
            }}
            onSubmit={handleSubmit}
          >
            {" "}
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <Input
                  label="First name"
                  name="firstname"
                  value={user.firstname}
                  onChange={handleChange}
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Input
                  label="Last Name"
                  name="lastName"
                  value={user.lastName}
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
            <Input
              label="Email Address"
              name="email"
              value={user.email}
              type="email"
              onChange={handleChange}
            />
            <Input
              label="password"
              name="password"
              type="password"
              value={user.password}
              onChange={handleChange}
            />
            <Button
              spacing={2}
              type="submit"
              fullWidth
              sx={{ mt: 3, mb: 2 }}
              variant="contained"
            >
              Sign Up
            </Button>
            <Grid container justifyContent="center">
              <Grid item>
                <Link href="/signin" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
export default SignUp;
