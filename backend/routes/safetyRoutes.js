import express from "express";
import { getSafetyData } from "../controllers/safetyController.js";

const router = express.Router();

router.post("/", getSafetyData);

export default router;
