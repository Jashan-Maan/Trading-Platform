import { Router } from "express";
import { getAllHoldings } from "../controllers/holdings.controller.js";
import { authenticateUser } from "../middlewares/auth.middleware.js";

const router = Router();

router.route("/").get(authenticateUser, getAllHoldings);

export default router;
