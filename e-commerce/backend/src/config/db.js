

import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/e-commerce-store");

        console.log(" MongoDB connected successfully");

    } catch (err) {
        console.error(" MongoDB connection failed:", err.message);
    }
};