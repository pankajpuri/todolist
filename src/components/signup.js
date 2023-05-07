import React from "react";
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

function Copyright(props) {
  <Typography variant="body2" color="text.secondary" align="center" {...props}>
    {"Copyright © "}
    <Link color="inherit" href="https://mui.com/">
      Your Website
    </Link>{" "}
    {new Date().getFullYear()}
    {"."}
  </Typography>;
}
const theme = createTheme();

function SignUp() {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    mobile: "",
    street: "",
    suburb: "",
    city: "",
    postalCode: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      // password:data.get("password")
    });
  };
  const handleChange = (event) => {
    const { name, value } = event.currentTarget;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="lg">
        <CssBaseline />
        <Box
          sx={{
            width: "100%",
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
            sx={{ mt: 1, px: 10, py: 4, border: "1px solid" }}
            noValidate
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
              label="Mobile"
              name="mobile"
              value={user.mobile}
              onChange={handleChange}
              type="number"
            />
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <Input
                  label="Street"
                  name="street"
                  value={user.street}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Input
                  label="Suburb"
                  name="suburb"
                  value={user.suburb}
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <Input
                  label="City"
                  name="city"
                  value={user.city}
                  onChange={handleChange}
                />{" "}
              </Grid>
              <Grid item xs={12} sm={6}>
                <Input
                  label="Postal code"
                  name="postalCode"
                  value={user.postalCode}
                  onChange={handleChange}
                  type="number"
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
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <Input
                  label="password"
                  name="password"
                  type="password"
                  value={user.password}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Input
                  label="Confrim passowrd"
                  name="confirmPassword"
                  value={user.confirmPassword}
                  type="password"
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
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
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}
export default SignUp;
