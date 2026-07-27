import express from "express";
import cors from "cors"
import  connectDB  from "./src/config/db.js";
import routers from "./src/routes/user-routes.js";


const app = express()

app.use(cors())
app.use(express.json())

connectDB()

app.use("/api/user",routers)

app.get("/",(req,res) =>{
    res.end("server now started ")
    // console.log("server now started ")
})

app.listen(5000,() =>{
    console.log("server started successfully");
    
})