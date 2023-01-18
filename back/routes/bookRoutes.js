const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/auth.js');

const {
  getBook,
  getBooks,
  addBook,
  removeBook,
  editBook,
} = require('../controllers/bookControllers.js');

router.get('/', [authMiddleware.verifyToken], getBooks);
router.post('/', [authMiddleware.verifyToken], addBook);
router.get('/:bookId', [authMiddleware.verifyToken], getBook);
router.delete('/:bookId', [authMiddleware.verifyToken], removeBook);
router.post('/:bookId', [authMiddleware.verifyToken], editBook);

module.exports = router;
