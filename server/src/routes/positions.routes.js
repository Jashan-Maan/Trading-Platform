import { Router } from "express";
import { getAllPositions } from "../controllers/poistions.controller.js";

const router = Router();

router.route("/").get(getAllPositions);

export default router;
