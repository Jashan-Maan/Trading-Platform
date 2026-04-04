import { Router } from "express";
import { getAllPositions } from "../controllers/positions.controller.js";
import { authenticateUser } from "../middlewares/auth.middleware.js";

const router = Router();

router.route("/").get(authenticateUser, getAllPositions);

export default router;
