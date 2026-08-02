import express from "express";
import { fetchAuthUser, signUPAuthUser } from "../controllers/authUser-controller.js";

const router = express.Router()

router.get("/get", fetchAuthUser)
router.get("/signup", signUPAuthUser)

export default router