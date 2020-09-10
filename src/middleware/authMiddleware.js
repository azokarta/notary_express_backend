const jwt = require('jsonwebtoken');
const User = require('../models/User');

module.exports = (req, res, next) => {
  const { authorization } = req.headers;
  // authorization === 'Bearer laksjdflaksdjasdfklj'

  // Check if not token
  if (!authorization) {
    return res.status(401).send({ error: 'No token, authorization denied' });
  }

  try {
    const token = authorization.replace('Bearer ', '');
    jwt.verify(token, 'KJNFJS@MD2020', async (err, payload) => {
      if (err) {
        return res.status(401).send({ error: 'You must be logged in.' });
      }

      const { userId } = payload;
      const user = await User.findById(userId);
      req.user = user;
      next();
    });
  } catch (err) {
    // 401 stands for unauthorized
    res.status(401).json({
      msg: 'Token is not valid',
    });
  }
};
