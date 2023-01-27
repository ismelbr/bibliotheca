import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';

import Book from './book';

const mockStore = configureStore([]);
let store;

const username = 'this is me';
const bookTitle = 'Crime and punishment';

describe('book', () => {
  beforeEach(() => {
    store = mockStore({
      auth: {
        username,
        accessToken: 'accessToken',
      },
      books: { myList: [{ id: 1, title: bookTitle }] },
    });
  });

  test('renders book page with disabled buttons', async () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/book']}>
          <Book />
        </MemoryRouter>
      </Provider>,
    );

    const input = screen.getByLabelText('Book title');
    const saveButton = screen.getByRole('button', {
      name: /save/i,
    });

    const clearButton = screen.getByRole('button', {
      name: /clear/i,
    });

    expect(input).toHaveValue('');
    expect(saveButton).toBeInTheDocument();
    expect(saveButton).toBeDisabled();
    expect(clearButton).toBeInTheDocument();
    expect(clearButton).toBeDisabled();
  });

  test('buttons are enabled with the user types a title', async () => {
    const user = userEvent.setup();
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/book']}>
          <Book />
        </MemoryRouter>
      </Provider>,
    );

    const input = screen.getByLabelText('Book title');
    const saveButton = screen.getByRole('button', {
      name: /save/i,
    });

    const clearButton = screen.getByRole('button', {
      name: /clear/i,
    });

    await userEvent.type(input, bookTitle);
    expect(saveButton).not.toBeDisabled();
    expect(clearButton).not.toBeDisabled();

    await userEvent.click(clearButton);
    expect(saveButton).toBeDisabled();
    expect(clearButton).toBeDisabled();
  });

  test('User cannot add twice the same book title', async () => {
    const user = userEvent.setup();
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/book']}>
          <Book />
        </MemoryRouter>
      </Provider>,
    );

    const input = screen.getByLabelText('Book title');
    const saveButton = screen.getByRole('button', {
      name: /save/i,
    });

    const clearButton = screen.getByRole('button', {
      name: /clear/i,
    });

    await userEvent.type(input, bookTitle);
    await userEvent.click(saveButton);
    expect(screen.getByText(/Duplicate title/i)).toBeInTheDocument();
  });
});
