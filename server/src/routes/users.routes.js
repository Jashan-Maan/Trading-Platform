import { Router } from "express";
import {
  validateLogin,
  validateRegistration,
} from "../middlewares/validation.middleware.js";
import {
  getMe,
  loginUser,
  logoutUser,
  refreshAccessToken,
  registerUser,
} from "../controllers/users.controller.js";
import { authenticateUser } from "../middlewares/auth.middleware.js";

const router = Router();

router.route("/register").post(validateRegistration, registerUser);
router.route("/login").post(validateLogin, loginUser);
router.route("/logout").post(authenticateUser, logoutUser);
router.route("/refresh-token").post(refreshAccessToken);
router.route("/me").get(authenticateUser, getMe);

export default router;
