import joi from "joi";

const signinSchema = joi.object({
  mail: joi.string().required().email().min(8).max(21).messages({
    'string.email': "Invalid email address format",
    'any.required': "Email is required",
    'string.min': "Password must have at least 8 characters",
    'string.max': "Password must be less than 21 characters",
    'string.empty': "Email is required"
  }),
  password: joi.string().required().alphanum().min(8).max(21).messages({
    'string.alphanum': "Password must be alphanumeric",
    'string.min': "Password must have at least 8 characters",
    'string.max': "Password must be less than 21 characters",
    'any.required': "Password is required"
  })
});

export default signinSchema