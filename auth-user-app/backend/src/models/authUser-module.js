import mongoose from "mongoose";

const authUserSchema = new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true }
}, {
    timestamps: true
})

export default mongoose.model("authUser", authUserSchema)