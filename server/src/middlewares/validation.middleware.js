import {
  loginSchema,
  orderSchema,
  registerSchema,
} from "../config/joiSchema.js";
import ApiError from "../utils/ApiError.js";

export const validateRegistration = async (req, res, next) => {
  const { error } = registerSchema.validate(req.body, { abortEarly: false });
  if (error) {
    throw new ApiError(
      400,
      `Validation Error: ${error.details
        .map((detail) => detail.message)
        .join(", ")}`,
    );
  }
  next();
};

export const validateLogin = async (req, res, next) => {
  const { error } = loginSchema.validate(req.body, { abortEarly: false });
  if (error) {
    throw new ApiError(
      400,
      `Validation Error: ${error.details
        .map((detail) => detail.message)
        .join(", ")}`,
    );
  }
  next();
};

export const validateOrder = async (req, res, next) => {
  const { error } = orderSchema.validate(req.body, { abortEarly: false });
  if (error) {
    throw new ApiError(
      400,
      `Validation Error: ${error.details
        .map((detail) => detail.message)
        .join(", ")}`,
    );
  }
  next();
};
