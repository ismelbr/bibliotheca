import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import BookList from './bookList';
const mockStore = configureStore([]);

let store;

describe('book list', () => {
  beforeEach(() => {
    store = mockStore({
      auth: {
        username: 'this is me',
        accessToken: 'accessToken',
      },
      books: {
        myList: [
          { id: 1, title: 'Crime and punishment' },
          { id: 2, title: "The Wise Man's Fear" },
        ],
      },
    });
  });

  test("renders books page with all books from the user's book list", () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/books']}>
          <BookList />
        </MemoryRouter>
      </Provider>,
    );

    expect(screen.getByText(/Crime and punishment/i)).toBeInTheDocument();
    expect(
      screen.getByRole('button', {
        name: /edit_1/i,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('button', {
        name: /delete_1/i,
      }),
    ).toBeInTheDocument();

    expect(screen.getByText(/The Wise Man's Fear/i)).toBeInTheDocument();

    expect(
      screen.getByRole('button', {
        name: /edit_2/i,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('button', {
        name: /delete_2/i,
      }),
    ).toBeInTheDocument();
  });
});
