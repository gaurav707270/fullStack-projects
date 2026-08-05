import express from "express";
import { fetchUser, signup } from "../controllers/user-controller.js";
import { addProduct, deleteProduct, fetchProduct, updateProduct } from "../controllers/product-controller.js";

const router = express.Router()

router.post("/signup", signup)
router.get("/getuser", fetchUser)

router.post("/addproduct", addProduct)
router.get("/getproduct", fetchProduct)
router.put("/updateproduct", updateProduct);
router.delete("/deleteproduct", deleteProduct)

export default router;
