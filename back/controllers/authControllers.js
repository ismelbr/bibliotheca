const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const db = require('../db/index');
const CustomError = require('../utils/CustomError');

const generateAccessToken = (username) =>
  jwt.sign(
    {
      username: username,
    },
    process.env.JWT_KEY,
    {
      expiresIn: 86400, // 24 hours
    },
  );

const login = async (req, res, next) => {
  try {
    const user = await db.users.getUser(req.body.username);
    if (!user) {
      throw new CustomError('User not found.', 404);
    }

    const passwordIsValid = bcrypt.compareSync(req.body.password, user.password);

    if (!passwordIsValid) {
      throw new CustomError('Invalid Password!', 401);
    }

    const token = generateAccessToken(user.username);

    res.status(200).send({
      username: user.username,
      accessToken: token,
    });
  } catch (error) {
    next(error);
  }
};

const register = async (req, res, next) => {
  try {
    const user = await db.users.getUser(req.body.username);

    if (!user) {
      await db.users.addUser(req.body.username, bcrypt.hashSync(req.body.password, 8));
      const token = generateAccessToken(req.body.username);

      res.status(201).send({
        username: req.body.username,
        accessToken: token,
      });
    } else {
      throw new CustomError('User already exists.', 409);
    }
  } catch (error) {
    next(error);
  }
};

module.exports = {
  login,
  register,
};
