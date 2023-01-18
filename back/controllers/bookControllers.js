const db = require('../db/index');
const CustomError = require('../utils/CustomError');

const getBook = async (req, res, next) => {
  const username = req.username;
  const bookId = req.params.bookId;

  try {
    const book = await db.books.getBook(username, bookId);
    res.send(book);
  } catch (error) {
    next(error);
  }
};

const getBooks = async (req, res, next) => {
  const username = req.username;

  try {
    const books = await db.books.getBooks(username);
    res.send(books);
  } catch (error) {
    next(error);
  }
};

const addBook = async (req, res, next) => {
  const username = req.username;
  const bookTitle = req.body.title;

  try {
    const isBookInTheList = await db.books.isInMyList(username, bookTitle);
    // book is already in user's book list
    if (isBookInTheList) {
      throw new CustomError('Book is already in your book list.', 409);
    }
    const book = await db.books.addBook(username, bookTitle);
    res.status(201).send(book);
  } catch (error) {
    next(error);
  }
};

const editBook = async (req, res, next) => {
  const username = req.username;
  const bookId = req.params.bookId;
  const newBookTitle = req.body.title;

  try {
    const isBookInTheList = await db.books.isInMyList(username, newBookTitle);
    // book is already in user's book list
    if (isBookInTheList) {
      throw new CustomError("Book is already in user's book list.", 404);
    }
    const book = await db.books.updateBook(username, bookId, newBookTitle);
    res.send(book);
  } catch (error) {
    next(error);
  }
};

const removeBook = async (req, res, next) => {
  const username = req.username;
  const bookId = req.params.bookId;

  try {
    res.send(await db.books.removeBook(username, bookId));
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getBook,
  getBooks,
  addBook,
  editBook,
  removeBook,
};
