import { render, screen } from '@testing-library/react';
import App from './App';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';

const mockStore = configureStore([]);
let store;

beforeEach(() => {
  store = mockStore({
    auth: {},
  });
});

test('renders sign up page when the user isnt logged', () => {
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
