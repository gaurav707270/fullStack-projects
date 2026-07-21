import dotenv from "dotenv";

dotenv.config()

import app from "./app";
import { connectToDB } from "./config/database";

connectToDB()

app.listen(3000, () =>{
    console.log("server is running on port 3000 ")
})