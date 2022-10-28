const joi = require('joi');


const signupValidation = joi.object({
  firstName: joi.string().empty().min(4).max(50)
    .required(),
  lastName: joi.string().empty().min(4).max(50)
    .required(),
  email: joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net', 'uk', 'co'] } }).empty().min(4)
    .max(50)
    .empty()
    .required(),
  password: joi.string().empty().min(4).max(70)
    .pattern(/^[a-zA-Z0-9]{3,30}$/)
    .required(),
});

const loginValidation = joi.object({
  email: joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net', 'uk', 'co'] } }).empty().min(4)
    .max(50)
    .required(),
  password: joi.string().empty().min(4).max(70)
    .pattern(/^[a-zA-Z0-9]{3,30}$/)
    .required(),
});


module.exports = {
  signupValidation,
  loginValidation,
}