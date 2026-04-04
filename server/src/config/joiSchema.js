import joi from "joi";

export const registerSchema = joi
  .object({
    name: joi.string().required(),
    email: joi.string().email().required(),
    password: joi.string().min(8).required().messages({
      "string.min": "Password must be at least 8 characters long.",
    }),
  })
  .required();

export const loginSchema = joi
  .object({
    email: joi.string().email().required(),
    password: joi.string().required(),
  })
  .required();

export const orderSchema = joi
  .object({
    name: joi.string().required(),
    qty: joi.number().required(),
    price: joi.number().required(),
    mode: joi.string().required().valid("BUY", "SELL").messages({
      "any.only": "Mode must be BUY or SELL",
    }),
  })
  .required();
