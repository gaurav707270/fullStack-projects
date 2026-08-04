import express from "express";
import { fetchAuthUser, signInAuthUser, signUPAuthUser } from "../controllers/authUser-controller.js";
import { checkAuthentications } from "../middleware/middleware.js";

const router = express.Router()

router.get("/get", checkAuthentications, fetchAuthUser);
router.post("/signup", signUPAuthUser);
router.post("/signin", signInAuthUser);

export default router;