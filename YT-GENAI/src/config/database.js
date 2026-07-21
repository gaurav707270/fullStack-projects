import mongoose from "mongoose";

export const connectToDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);

        console.log("connected to DataBase")

    } catch (err) {
        console.log(err)
    }

}


