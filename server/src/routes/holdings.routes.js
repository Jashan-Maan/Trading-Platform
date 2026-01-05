import { Router } from "express";
import { getAllHoldings } from "../controllers/holdings.controller.js";

const router = Router();

router.route("/").get(getAllHoldings);

export default router;
