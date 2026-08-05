import express from "express";
import { fetchUser, signInUser, signup } from "../controllers/user-controller.js";
import { addProduct, deleteProduct, fetchProduct, updateProduct } from "../controllers/product-controller.js";
import { checkAuthentications } from "../middleware/middleware.js";

const router = express.Router()

router.post("/signup", signup)
router.post("/signin",checkAuthentications, signInUser)
router.get("/getuser", fetchUser)

router.post("/addproduct", addProduct)
router.get("/getproduct", fetchProduct)
router.put("/updateproduct", updateProduct);
router.delete("/deleteproduct", deleteProduct)

export default router;
