/** @format */
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import Logo from '../assests/logo.png';
import RedApple_Admin_Login from '../assests/RedApple_Admin_Login.jpg';
import { useState, useContext } from 'react';
import { UserContext } from '../UserContext';
import axios from 'axios';
import {
  Button,
  TextField,
  Grid,
  Typography,
  Box,
  Paper,
  CssBaseline,
  FormControlLabel,
  Checkbox,
  Link,
} from '@mui/material';

function Copyright(props) {
  return (
    <Typography variant='body2' color='text.secondary' align='center' {...props}>
      {'Copyright © '}
      <Link color='inherit'>
        Iamredapple.com
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

function LoginPage() {
  const { setUser } = useContext(UserContext);
  const [inputs, setInputs] = useState({
    username: '',
    password: '',
  });
  const [userError, setUserError] = useState(false);
  const [pwdError, setPwdError] = useState(false);
  const navigate = useNavigate();

  function handleChange(e) {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  }
  const handleSubmit = async e => {
    e.preventDefault();
    setUserError(false);
    setPwdError(false);
    let formData = new FormData();
    formData.append('username', inputs.username);
    formData.append('password', inputs.password);

    axios
      .post('login.php', formData)
      .then(result => {
        const res = result.data['res']; 
        if (res === 'true') {
          setUser(result.data['name']);
          navigate('/');
        } else if (res === 'Password Incorrent') setPwdError(true);
        else setUserError(true);
      })
      .catch(error => console.log(error));
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid
        container
        component='main'
        sx={{ height: '100vh', overflow: 'hidden', minHeight: '350px' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={8}
          sx={{
            // backgroundImage: 'url(https://source.unsplash.com/random)',
            backgroundImage: `url(${RedApple_Admin_Login})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundColor: t =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
          }}
        />
        <Grid item xs={12} sm={8} md={4} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}>
            <img className='logologin' src={Logo} alt='logo' />

            <Typography component='h1' variant='h3'>
              Login
            </Typography>
            <Box component='form' onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                error={userError && true}
                margin='normal'
                required
                fullWidth
                id={userError ? 'outlined-error-helper-text' : 'username'}
                label='Username'
                name='username'
                autoComplete='username'
                autoFocus
                onChange={handleChange}
                value={inputs.username}
                helperText={userError}
              />
              <TextField
                error={pwdError && true}
                margin='normal'
                required
                fullWidth
                name='password'
                label='Password'
                type='password'
                id={pwdError ? 'outlined-error-helper-text' : 'password'}
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
