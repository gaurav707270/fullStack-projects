import express from "express";
import { fetchAuthUser, signInAuthUser, signUPAuthUser } from "../controllers/authUser-controller.js";

const router = express.Router()

router.get("/get", fetchAuthUser);
router.post("/signup", signUPAuthUser);
router.post("/signin", signInAuthUser);

export default router;