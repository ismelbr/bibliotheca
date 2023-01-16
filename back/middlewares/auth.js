const jwt = require('jsonwebtoken');

verifyToken = (req, res, next) => {
  let token = req.headers['x-access-token'];

  if (!token) {
    return res.status(403).send({
      message: 'No token provided!',
    });
  }

  jwt.verify(
    token,
    /*'no-secret-at-all-123456',*/
    process.env.JWT_KEY,
    (err, decoded) => {
      if (err) {
        return res.status(401).send({
          message: 'Unauthorized!',
        });
      }
      req.username = decoded.username;
      next();
    },
  );
};

module.exports = verifyToken;
