import express from "express";
import cors from "cors";
import routes from "./src/routes/authUser-routes.js";
import connectDb from "./src/config/connect-db.js";

const app = express();

app.use(express.json());
app.use(cors());

connectDb();

app.use("/api", routes);

app.get("/", (req, res) => {
    res.send("Server is now live");
});

app.listen(3000, () => {
    console.log("Server started successfully on port 3000");
});