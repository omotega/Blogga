const jwt = require('jsonwebtoken');

async function generateToken(payload) {
  const token = await jwt.sign(payload, process.env.SECRET, {
    expiresIn: '1h',
  });
  return token;
}

async function decodeToken(token) {
  const payload = await jwt.verify(token, process.env.SECRET);
  return payload;
}

module.exports = {
  generateToken,
  decodeToken,
};
