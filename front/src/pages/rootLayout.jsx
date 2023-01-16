import { Container } from '@mui/system';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Outlet } from 'react-router-dom';
import MainNavigation from '../components/mainNavigation';
import { getUserBooks } from '../store/books/bookActionCreator';

function RootLayout() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserBooks());
  }, [dispatch]);

  return (
    <main>
      <MainNavigation />
      <Container sx={{ marginTop: '50px' }}>
        <Outlet />
      </Container>
    </main>
  );
}

export default RootLayout;
