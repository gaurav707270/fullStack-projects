require("dotenv").config();

const app = require("./app");
const connectToDB = require("./config/database");

const startServer = async () => {
    try {
        await connectToDB();

        const PORT = process.env.PORT || 3000;

        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    } catch (err) {
        console.error("Failed to start server:", err.message);
    }
};

startServer();