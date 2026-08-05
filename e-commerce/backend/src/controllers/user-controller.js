import user from "../models/user-model.js";
import bcrypt from "bcrypt";

export const signup = async (req, res) => {
    try {
        console.log(req.body);

        const password = req.body.password;

        const hashed = await bcrypt.hash(password, 10);

        const result = await user.create({
            ...req.body,
            password: hashed,
        });

        res.status(200).json({
            status: true,
            message: "User signup successfully",
            data: result,
        });

    } catch (err) {
        console.log(err);

        res.status(400).json({
            status: false,
            message: "User signup failed",
            err: err.message,
        });
    }
};

export const fetchUser = async (req, res) => {
    try {

        console.log(req.body)
        const result = await user.find();

        res.status(200).json({
            status: true,
            message: "user fetching successfully",
            data: result
        })

    } catch (err) {
        console.log(err);

        res.status(400).json({
            status: false,
            message: "user fetching failed",
            err: err.message
        })
    }
}