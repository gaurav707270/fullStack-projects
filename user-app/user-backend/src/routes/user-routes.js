import express from "express";
import { adduser, deleteUser, fetchUser, updateUser } from "../controllers/user-controller.js";

const router = express.Router();

router.post("/add",adduser)
router.get("/get",fetchUser)
router.put("/update",updateUser)
router.delete("/delete",deleteUser)

export default router