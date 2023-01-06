const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

class Helper {
  
  static calculateReadingTime(body) {
    const readtime = Math.round(body.split(' ').length / 200);
    const readingTime =
      readtime < 1 ? `${readtime + 1} mins read` : `${readtime} mins read`;
    return readingTime;
  }

  static async  hashPassword(password)  {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    return hashedPassword;
  }
  
  static async comparePassword(password, hashedPassword) {
    const userpassword = await bcrypt.compare(password, hashedPassword);
    return userpassword;
  }

  static async generateToken(payload) {
    const token = await jwt.sign(payload, process.env.SECRET, {
      expiresIn: '1h',
    });
    return token;
  }
  
  static async decodeToken(token) {
    const payload = await jwt.verify(token, process.env.SECRET);
    return payload;
  }

  
}



module.exports = {
  Helper
};
