import { Box, Button, Grid, TextField, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getErrorMessage } from '../helpers/error';
import useAuth from '../hooks/useAuth';
import Logo from '@biblologo';

const Password = () => {
  const navigate = useNavigate();
  const { changePassword } = useAuth();

  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const changePasswordHandler = (event) => {
    event.preventDefault();

    changePassword(oldPassword, newPassword)
      .then(() => {
        navigate('/books');
      })
      .catch((error) => {
        const message = getErrorMessage(error);
        alert(message);
      });
  };

  const validateForm = () => {
    return oldPassword.length && newPassword.length;
  };

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      direction="column"
      sx={{ minHeight: '80vh' }}
      spacing={5}
    >
      <Grid item>
        <Stack direction="row" spacing={1}>
          <Typography variant="h5">Change Password</Typography>
        </Stack>
      </Grid>
      <Grid item>
        <Grid container direction="column" alignItems="center" justifyContent="center">
          <TextField
            label="Old Password"
            type="password"
            fullWidth
            sx={{ marginBottom: '15px' }}
            value={oldPassword}
            onChange={(e) => setOldPassword(e.target.value)}
            required
          />
          <TextField
            label="New Password"
            type="password"
            fullWidth
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />
          <Stack direction="row" spacing={3} sx={{ marginTop: '15px' }}>
            <Button
              variant="contained"
              disabled={!validateForm()}
              onClick={(e) => changePasswordHandler(e)}
            >
              Save
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Password;
