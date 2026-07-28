import express from "express";
import { adduser, deleteUser, fetchUser, updateUser } from "../controllers/userData-controller.js";
import { addSingUpUser, getSingUpUser } from "../controllers/singUpUser-controller.js";

const router = express.Router();

router.post("/adduser",adduser)
router.get("/getuser",fetchUser)
router.put("/updateuser",updateUser)
router.delete("/deleteuser",deleteUser)

router.post("/addsingup",addSingUpUser)
router.get("/getsingup",getSingUpUser)

export default router