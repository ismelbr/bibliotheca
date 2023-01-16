const express = require('express');
const router = express.Router();
const verifyToken = require('../middlewares/auth.js');

const {
  getBook,
  getBooks,
  addBook,
  removeBook,
  editBook,
} = require('../controllers/bookControllers.js');

router.get('/', [verifyToken], getBooks);
router.post('/', [verifyToken], addBook);
router.get('/:bookId', [verifyToken], getBook);
router.delete('/:bookId', [verifyToken], removeBook);
router.post('/:bookId', [verifyToken], editBook);

module.exports = router;
