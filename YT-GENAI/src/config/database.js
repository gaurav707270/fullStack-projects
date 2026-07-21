import mongoose from "mongoose";
import dotenv from 'dotenv'

dotenv.config()

export const connectToDB = async () => {
    try {
        console.log(process.env.MONGO_URL)
        await mongoose.connect(`${process.env.MONGO_URL}/gen-ai`);

        console.log("connected to DataBase")

    } catch (err) {
        console.log(err);
    }

}


