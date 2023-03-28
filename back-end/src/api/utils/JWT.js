const jwt = require('jsonwebtoken');
const ErrorWithStatus = require('./ErrorWithStatus');

const TOKEN_SECRET = 'secret_key';

const generateToken = (payload) => 
  jwt.sign(payload, TOKEN_SECRET, {
    algorithm: 'HS256',
    expiresIn: '7d',
  });

const authenticateToken = (token) => {
  if (!token) throw new ErrorWithStatus('Token not found', 401);

  try {
    const verificationResponse = jwt.verify(token, TOKEN_SECRET);
    return verificationResponse;
  } catch (error) {
    throw new ErrorWithStatus('Expired or invalid token', 401);
  }
};

const decodeToken = (token) => {
  const payload = jwt.decode(token);
  return payload;
};

module.exports = {
  generateToken,
  authenticateToken,
  decodeToken,
};