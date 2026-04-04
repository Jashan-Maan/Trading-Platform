import { Router } from "express";
import { createOrder } from "../controllers/orders.controller.js";
import { authenticateUser } from "../middlewares/auth.middleware.js";

const router = Router();

router.route("/").post(authenticateUser, createOrder);

export default router;
