import { useDispatch, useSelector } from 'react-redux';
import { addUserBook, deleteUserBook, updateUserBook } from '../store/books/bookActionCreator';

const useBook = () => {
  const dispatch = useDispatch();

  const books = useSelector((state) => state.books);
  const getBook = (bookId) => books?.myList?.find((book) => book.id === bookId);

  const isTitleValid = (title, bookId) =>
    !books.myList.find((book) => book.title === title && book.id !== bookId);

  const saveBook = (title, bookId) => {
    if (bookId) {
      dispatch(updateUserBook(title, bookId));
    } else {
      dispatch(addUserBook(title));
    }
  };

  const deleteBook = (bookId) => {
    dispatch(deleteUserBook(bookId));
  };

  return {
    books: books.myList,
    getBook,
    isTitleValid,
    saveBook,
    deleteBook,
  };
};

export default useBook;
