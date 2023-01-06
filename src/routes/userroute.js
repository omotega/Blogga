const express = require('express');

const userRouter = express.Router();


const { signUp,login } = require('../controllers/usercontroller')
const { registerMiddleware,loginMiddleware } = require('../middleware/validate')


userRouter.route('/signup').post(registerMiddleware,signUp);
userRouter.route('/login').get(loginMiddleware,login);

module.exports = userRouter;