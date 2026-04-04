import { Router } from "express";
import {
  createOrder,
  deleteOrder,
  getAllOrders,
} from "../controllers/orders.controller.js";
import { authenticateUser } from "../middlewares/auth.middleware.js";
import { validateOrder } from "../middlewares/validation.middleware.js";

const router = Router();

router.route("/").post(authenticateUser, validateOrder, createOrder);
router.route("/").get(authenticateUser, getAllOrders);
router.route("/:orderId").delete(authenticateUser, deleteOrder);

export default router;
