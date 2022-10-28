const User = require('../model/usermodel');
const { hashPassword, comparePassword } = require('../utils/hash');
const {
  errorResponse,
  successResponse,
  handleError,
} = require('../utils/responses');
const { generateToken  } = require('../utils/token')

const signUp = async (req, res) => {
  try {
    const { firstName, lastName,  email, password } = req.body;
    if (!firstName || !lastName  || !email || !password) {
      return errorResponse(res, 401, 'incomplete credentials');
    }
    const userExist = await User.findOne({ email });
    if (userExist) return errorResponse(res, 401, 'user already exist');
    const hash = await hashPassword(password);
    const user = await User.create({
      firstName,
      lastName,
      email,
      password: hash,
    });
    return successResponse(res, 201, 'user created succesfully', user);
  } catch (error) {
    handleError(error, req);
    return errorResponse(res, 500, 'Server error');
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return errorResponse(res, 401, 'incomplete credentials');
    }
    const user = await User.findOne({ email });
    if (!user) return errorResponse(res, 404, 'user not found');
    const isPassword = await comparePassword(password,user.password);
    if (!isPassword) return errorResponse(res, 401, 'incorrect password');
    const token = await generateToken({ id: user.id, firstName: user.firstName,lastName: user.lastName });
    return successResponse(res, 200, 'user logged in successfully', {
      user,
      token,
    });
  } catch (error) {
    handleError(error, req);
    return errorResponse(res, 500, 'Server error');
  }
};

module.exports = {
  signUp,
  login,
};
