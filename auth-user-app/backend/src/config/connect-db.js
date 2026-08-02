import mongoose from "mongoose";

const connectDB = async () => {
    try {
        mongoose.connect("mongodb://localhost:27017/authstore")
        console.log("mongoDb connect successfully ")

    } catch (err) {
        console.log(err)
        console.log("mongoDB connetion failed ")
    }
}

export default connectDB;