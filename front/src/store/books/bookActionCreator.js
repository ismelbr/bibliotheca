import { getBooks, addBook, updateBook, deleteBook } from '../../helpers/api.js';
import { getErrorMessage } from '../../helpers/error.js';
import { bookActions } from './bookSlice';

export const getUserBooks = () => (dispatch) => {
  return getBooks().then(
    (books) => {
      dispatch(bookActions.setBooks(books));
      return Promise.resolve();
    },
    (error) => {
      const message = getErrorMessage(error);
      alert(message);

      return Promise.reject();
    },
  );
};

export const addUserBook = (title, bookId) => (dispatch) => {
  return addBook(title, bookId).then(
    (book) => {
      dispatch(bookActions.addBook(book));
      return Promise.resolve();
    },
    (error) => {
      const message = getErrorMessage(error);
      alert(message);

      return Promise.reject();
    },
  );
};

export const updateUserBook = (title, bookId) => (dispatch) => {
  return updateBook(title, bookId).then(
    (book) => {
      dispatch(bookActions.updateBook(book));
      return Promise.resolve();
    },
    (error) => {
      const message = getErrorMessage(error);
      alert(message);

      return Promise.reject();
    },
  );
};

export const deleteUserBook = (bookId) => (dispatch) => {
  return deleteBook(bookId).then(
    (book) => {
      dispatch(bookActions.deleteBook(bookId));
      return Promise.resolve();
    },
    (error) => {
      const message = getErrorMessage(error);
      alert(message);

      return Promise.reject();
    },
  );
};
