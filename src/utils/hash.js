const bcrypt = require('bcrypt');

async function hashPassword(password) {
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  return hashedPassword;
}

async function comparePassword(password, hashedPassword) {
  const userpassword = await bcrypt.compare(password, hashedPassword);
  return userpassword;
}

module.exports = {
  hashPassword,
  comparePassword,
};
