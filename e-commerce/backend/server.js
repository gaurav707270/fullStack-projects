import express from "express";
import { connectDB } from "./src/config/db.js";
import router from "./src/routes/route.js";
import cookieParser from "cookie-parser";

const app = express()
connectDB()

app.use(express.json())
// app.use(cors())
// app.use(cookieParser())

app.use("/api", router)


app.listen(3000, () => {
    console.log("server now started")
})