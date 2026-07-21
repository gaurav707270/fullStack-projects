
import { app } from "./src/app.js";
import { connectToDB } from "./src/config/database.js";
import dotenv from "dotenv";

dotenv.config();
connectToDB();

app.listen(3000, () => {
    console.log("server is running on port 3000 ")
})