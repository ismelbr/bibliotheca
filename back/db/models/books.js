const { JsonDB, Config } = require('node-json-db');
const { v4: uuidv4 } = require('uuid');

const dbPath = process.env.NODE_ENV === 'test' ? './tests/db' : process.env.DB_PATH;

const books = new JsonDB(
  new Config(`${process.env.DB_PATH}/books-${process.env.NODE_ENV || ''}`, true, false, '/'),
);

const isInMyList = async (username, bookTitle) => {
  let userBooks = await getBooks(username);
  return (userBooks.books || []).includes(bookTitle);
};

const getBooks = async (username) => {
  let userBooks = { books: [] };
  try {
    userBooks = await books.getData(`/${username}`);
  } catch (error) {}
  return userBooks;
};

const getBook = async (username, bookId) => {
  const bookIndex = await books.getIndex(`/${username}/books`, bookId);
  return books.getData(`/${username}/books[${bookIndex}]`);
};

const addBook = async (username, bookTitle) => {
  const bookId = uuidv4();
  await books.push(
    `/${username}/books[]`,
    {
      id: bookId,
      title: bookTitle,
    },
    true,
  );

  return getBook(username, bookId);
};

const removeBook = async (username, bookId) => {
  const bookIndex = await books.getIndex(`/${username}/books`, bookId);
  books.delete(`/${username}/books[${bookIndex}]`);
};

const updateBook = async (username, bookId, newBookTitle) => {
  const bookIndex = await books.getIndex(`/${username}/books`, bookId);
  books.push(
    `/${username}/books[${bookIndex}]`,
    {
      id: bookId,
      title: newBookTitle,
    },
    true,
  );

  return getBook(username, bookId);
};

const removeAllBooks = async () => {
  await users.push('/', {});
};

module.exports = {
  isInMyList,
  getBook,
  getBooks,
  addBook,
  removeBook,
  updateBook,
  removeAllBooks,
};
