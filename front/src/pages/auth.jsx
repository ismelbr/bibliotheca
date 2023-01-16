import { Box, Button, Grid, TextField, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { getErrorMessage } from '../helpers/error';
import useAuth from '../hooks/useAuth';
import Logo from '@biblologo';

const Auth = () => {
  const usernameRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();
  const { signin, signup } = useAuth();

  const authHandler = (event, isLogin) => {
    event.preventDefault();

    const username = usernameRef.current.value;
    const password = passwordRef.current.value;

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

  console.log(process.env.REACT_APP_LOGO_DIR);

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
            src={/*`${process.env.REACT_APP_LOGO_DIR}/books.png`*/ Logo}
          />
        </Stack>
      </Grid>
      <Grid item>
        <Grid container direction="column" alignItems="center" justifyContent="center">
          <TextField
            label="Username"
            fullWidth
            sx={{ marginBottom: '15px' }}
            inputRef={usernameRef}
          />
          <TextField label="Password" type="password" fullWidth inputRef={passwordRef} />
          <Stack direction="row" spacing={3} sx={{ marginTop: '15px' }}>
            <Button variant="contained" onClick={(e) => authHandler(e, true)}>
              Log in
            </Button>
            <Button variant="contained" onClick={(e) => authHandler(e, false)}>
              Sign up
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Auth;
