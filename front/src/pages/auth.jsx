import { Box, Button, Grid, TextField, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getErrorMessage } from '../helpers/error';
import useAuth from '../hooks/useAuth';
import Logo from '@biblologo';

const Auth = () => {
  const navigate = useNavigate();
  const { signin, signup } = useAuth();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const authHandler = (event, isLogin) => {
    event.preventDefault();

    let auth;

    if (isLogin) {
      auth = signin(username, password);
    } else {
      auth = signup(username, password);
    }

    auth
      .then(() => {
        navigate('/books');
      })
      .catch((error) => {
        const message = getErrorMessage(error);
        alert(message);
      });
  };

  const validateForm = () => {
    return username.length & password.length;
  };

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      direction="column"
      sx={{ minHeight: '100vh' }}
      spacing={5}
    >
      <Grid item>
        <Stack direction="row" spacing={1}>
          <Typography variant="h5">Bibliotheca</Typography>
          <Box
            component="img"
            sx={{
              height: 32,
            }}
            alt="Your logo."
            src={Logo}
          />
        </Stack>
      </Grid>
      <Grid item>
        <Grid container direction="column" alignItems="center" justifyContent="center">
          <TextField
            label="Username"
            fullWidth
            sx={{ marginBottom: '15px' }}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <TextField
            label="Password"
            type="password"
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Stack direction="row" spacing={3} sx={{ marginTop: '15px' }}>
            <Button
              variant="contained"
              disabled={!validateForm()}
              onClick={(e) => authHandler(e, true)}
            >
              Log in
            </Button>
            <Button
              variant="contained"
              disabled={!validateForm()}
              onClick={(e) => authHandler(e, false)}
            >
              Sign up
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Auth;
