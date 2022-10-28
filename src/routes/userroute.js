const express = require('express');

const userRouter = express.Router();


const { signUp,login } = require('../controllers/usercontroller')
const { loginValidation,signupValidation } = require('../utils/validation')

userRouter.route('/signup').post(signUp);
userRouter.route('/login').get(login);

module.exports = userRouter;