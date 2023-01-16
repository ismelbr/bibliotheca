import { createBrowserRouter } from 'react-router-dom';
import ErrorBoundary from '../components/errorBoundary';
import ProtectedRoute from '../components/protectedRoute';
import Book from './book';
import Auth from './auth';
import BookList from './bookList';
import Home from './home';
import NotFound from './notFound';
import RootLayout from './rootLayout';

const router = createBrowserRouter([
  {
    path: '/signin',
    element: <Auth />,
  },
  {
    path: '/',
    element: (
      <ProtectedRoute>
        <RootLayout />
      </ProtectedRoute>
    ),
    errorElement: <ErrorBoundary />,
    children: [
      {
        path: '/home',
        element: <Home />,
      },
      {
        path: '/books',
        element: <BookList />,
      },
      {
        path: '/book/:bookId',
        element: <Book />,
      },
      {
        path: '/newbook',
        element: <Book />,
      },
      { path: '/notfound', element: <NotFound /> },
      { path: '*', element: <NotFound /> },
    ],
  },
]);

export default router;
