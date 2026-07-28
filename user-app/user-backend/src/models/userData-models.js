import mongoose from "mongoose";

const userDataSchema = new mongoose.Schema({
    userName:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true}

},{
    timestamps:true
})

export default mongoose.model("usersData",userDataSchema)

