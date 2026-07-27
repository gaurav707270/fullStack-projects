import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/userStore")
        console.log("mongoDB connected successfully")
    } catch (err) {
        console.log(err);

    }
}
export default connectDB