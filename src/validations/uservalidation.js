const joi = require('joi');

const RegisterValidation = (user) => {
  const registerSchema = joi.object({
    firstName: joi.string().min(4).max(25).required(),
    LastName: joi.string().min(4).max(25).required(),
    email: joi.email().required(),
    password: joi.string.required(),
  });
  return registerSchema.validate(user);
};

 const loginValidation = (login) => {
  const loginSchema = joi.object({
    email: joi.email().required(),
    password: joi.string.required(),
  });
  return loginSchema.validate(login);
};


module.exports= {
    RegisterValidation,
    loginValidation,
}
