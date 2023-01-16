import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import AdbIcon from '@mui/icons-material/Adb';
import useAuth from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

const pagePaths = { Home: '/home', 'My books': '/books', 'Add new book': '/newbook' };

export default function MainNavigation() {
  const { getAuth } = useAuth();
  const username = getAuth().username;
  const navigate = useNavigate();

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1 }}>
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              ></IconButton>
              <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
              <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                {Object.keys(pagePaths).map((page) => (
                  <Button
                    key={page}
                    onClick={() => navigate(pagePaths[page])}
                    sx={{ my: 2, color: 'white', display: 'block' }}
                  >
                    {page}
                  </Button>
                ))}
              </Box>
            </Toolbar>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Button
              onClick={() => navigate('/signin')}
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              {username}
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
