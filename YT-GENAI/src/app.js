const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.status(200).json({
        // success: true,
        // message: "Server is running successfully"
    // });
// });

// module.exports = app;node
