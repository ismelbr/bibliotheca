const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/auth');

const { login, register, password } = require('../controllers/authControllers.js');

router.post('/login', login);
router.post('/register', register);
router.post('/password', [authMiddleware.verifyToken], password);
module.exports = router;
