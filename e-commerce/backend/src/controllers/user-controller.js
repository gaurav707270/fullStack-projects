import user from "../models/user-model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

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


export const signInUser = async (req, res) => {
    try {
        console.log(req.body);

        const { email, password } = req.body;

        const singIn = await user.findOne({ email });

        if (!singIn) {
            return res.status(404).json({
                status: false,
                message: "User not found"
            });
        }

        const isMatch = await bcrypt.compare(password, singIn.password);

        if (!isMatch) {
            return res.status(401).json({
                status: false,
                message: "Invalid password"
            });
        }

        const token = jwt.sign(
            {
                userId: singIn._id,
                email: singIn.email,
            },
            "!@#$%^&*()",
            {
                expiresIn: "1h",
            }
        );

        res.cookie("token", token, {
            httpOnly: true,
            maxAge: 1000 * 60 * 60, // 1 hour
        });

        return res.status(200).json({
            status: true,
            message: "User login successfully",
            data: singIn
        });

    } catch (err) {
        console.log(err);

        return res.status(400).json({
            status: false,
            message: "User signin failed",
            error: err.message
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

