const {
  RegisterValidation,
  loginValidation,
} = require('../validations/uservalidation');
const { validateError, handleError } = require('../utils/responses');

const registerMiddleware = (req, res, next) => {
  const payload = req.body;
  try {
    const validate = RegisterValidation(payload);
    if (validate.error)
      return validateError(res, 400, validate.error.details[0].message);
    next();
  } catch (error) {
    handleError(req, error);
    return errorResponse(res, 500, 'Server error');
  }
};

const loginMiddleware = (req, res, next) => {
  const payload = req.body;
  try {
    const validate = loginValidation(payload);
    if (validate.error)
      return validateError(res, 400, validate.error.details[0].message);
    next();
  } catch (error) {
    handleError(req, error);
    return errorResponse(res, 500, 'Server error');
  }
};

module.exports = {
    registerMiddleware,
    loginMiddleware,
}
