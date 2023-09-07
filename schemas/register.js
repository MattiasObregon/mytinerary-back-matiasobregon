import joi from "joi";

const registerSchema = joi.object({
  name: joi.string().required().min(3).max(20).messages({
    'string.min': "Name must have at least 3 characters please!",
    'string.max': "Name must be less than 21 characters please!",
    'any.required': "Name is required",
    'string.empty': "Name is required"
  }),
  mail: joi.string().required().email().messages({
    'string.email': "Invalid email address format",
    'any.required': "Email is required",
    'string.empty': "Email is required"
  }),
  password: joi.string().required().alphanum().min(8).messages({
    'string.alphanum': "Password must be alphanumeric",
    'string.min': "Password must have at least 8 characters",
    'any.required': "Password is required"
  }),
  country: joi.string().required(),
  lastName: joi.string().min(3).max(20).empty("").messages({
    'string.min': "Last name must have at least 3 characters please!",
    'string.max': "Last name must be less than 21 characters please!",
  })
});

export default registerSchema;
