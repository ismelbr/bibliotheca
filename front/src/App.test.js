import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import App from './App';
import * as bookActionCreator from './store/books/bookActionCreator';

describe('App', () => {
  const mockStore = configureStore();
  let store;

  beforeEach(() => {
    store = mockStore({
      auth: {},
    });
  });

  test('renders home page when the user is logged in', () => {
    store = mockStore({
      auth: { username: 'this is me', accessToken: 'accessToken' },
    });

    const getUserBooksMock = jest.spyOn(bookActionCreator, 'getUserBooks');
    getUserBooksMock.mockReturnValue({
      type: 'nothing',
    });

    render(
      <Provider store={store}>
        <App />
      </Provider>,
    );
    expect(screen.getByText(/Home/i)).toBeInTheDocument();
    expect(screen.getByText(/My books/i)).toBeInTheDocument();
    expect(screen.getByText(/Add new book/i)).toBeInTheDocument();
    expect(screen.getByText(/this is me/i)).toBeInTheDocument();
  });

  test('renders sign up page when the user isnt logged in', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>,
    );
    expect(screen.getByText(/Bibliotheca/i)).toBeInTheDocument();
    expect(
      screen.getByRole('button', {
        name: /Log in/i,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('button', {
        name: /Sign up/i,
      }),
    ).toBeInTheDocument();
  });
});
