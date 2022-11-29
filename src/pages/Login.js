/** @format */

import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import Logo from "../assests/logo.png";
import RedApple_Admin_Login from "../assests/RedApple_Admin_Login.jpg";
import { useState } from "react";
import axios from "axios";

function Copyright(props) {
  return (
    <Typography
      variant='body2'
      color='text.secondary'
      align='center'
      {...props}>
      {"Copyright © "}
      <Link color='inherit' href='https://mui.com/'>
        Iamredapple.com
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

function LoginPage() {
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });
  const [userError, setUserError] = useState("");
  const [pwdError, setPwdError] = useState("");
  const navigate = useNavigate();

  function handleChange(e) {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    setUserError("");
    setPwdError("");
    let formData = new FormData();
    formData.append("username", inputs.username);
    formData.append("password", inputs.password);
    const url = "http://146.190.65.198/login.php";
    axios
      .post(url, formData)
      .then((result) => {
        const res = result.data["res"];
        if (res === "true") navigate("/dashboard");
        else if (res === "Password Incorrent") setPwdError(res);
        else setUserError(res);
      })
      .catch((error) => console.log(error));
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component='main' sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            // backgroundImage: "url(https://source.unsplash.com/random)",
            backgroundImage: `url(${RedApple_Admin_Login})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}>
            <img className='logologin' src={Logo} alt='logo' />

            <Typography component='h1' variant='h3'>
              Login
            </Typography>
            <Box component='form' onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                error={userError && "true"}
                margin='normal'
                required
                fullWidth
                id={userError ? "outlined-error-helper-text" : "username"}
                label='Username'
                name='username'
                autoComplete='username'
                autoFocus
                onChange={handleChange}
                value={inputs.username}
                helperText={userError}
              />
              <TextField
                error={pwdError && "true"}
                margin='normal'
                required
                fullWidth
                name='password'
                label='Password'
                type='password'
                id={pwdError ? "outlined-error-helper-text" : "password"}
                autoComplete='current-password'
                onChange={handleChange}
                value={inputs.password}
                helperText={pwdError}
              />
              <FormControlLabel
                control={<Checkbox value='remember' color='primary' />}
                label='Remember me'
              />
              <br />
              <Button type='submit' variant='contained' sx={{ mt: 3, mb: 2 }}>
                Login In
              </Button>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default LoginPage;
