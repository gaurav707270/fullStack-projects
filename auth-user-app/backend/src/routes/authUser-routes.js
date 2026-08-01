import express from "express";
import { singUP } from "../controllers/authUser-controller.js";

const router = express.Router();

router.post("/auth", singUP);

export default router;