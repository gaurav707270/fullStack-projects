import express from "express";
import connectDB from "./src/config/connect-db.js";
import router from "./src/routes/authUser-routes.js";
import cors from "cors"
import cookieParser from "cookie-parser";

const app = express();

app.use(express.json())

app.use(cors())

connectDB()

app.use(cookieParser())

app.use("/api", router)

// app.get("/", (req, res) => {
//     res.end("ser now live")
// })

app.listen(3000, () => {
    console.log("server started successfully")
})