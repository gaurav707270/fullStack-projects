import authUser from "../models/authUser-module.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const fetchAuthUser = async (req, res) => {
    try {
        console.log(req.body);
        const result = await authUser.find();
        res.status(200).json({
            status: true,
            message: "authuser data fetching successfully",
            data: result
        })


    } catch (err) {
        console.log(err);
        res.status(400).json({
            status: false,
            message: "authUser data fetching failed",
            err: err.message
        })
    }
}

export const signUPAuthUser = async (req, res) => {
    console.log(req.body);

    try {
        const password = req.body.password;
        const hashed = await bcrypt.hash(password, 12)
        const result = await authUser.create({ ...req.body, password: hashed });

        res.status(200).json({
            status: true,
            message: "authuser signup successfully ",
            data: result
        })

    } catch (err) {
        console.log(err);
        res.status(500).json({
            status: false,
            message: "authuser signup failed",
            err: err.message
        })
    }
}


export const signInAuthUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        const singInUser = await authUser.findOne({ email });

        if (!singInUser) {
            return res.status(400).json({
                status: false,
                message: "User not found"
            });
        }

        const isMatch = await bcrypt.compare(
            password,
            singInUser.password
        );

        if (!isMatch) {
            return res.status(400).json({
                status: false,
                message: "Email or password is wrong"
            });
        }

        const token = jwt.sign(
            {
                userId: singInUser._id,
                email: singInUser.email
            },
            "!@#$%^&*()",
            {
                expiresIn: "1h"
            }
        );

        return res.status(200).json({
            status: true,
            message: "User signin successfully",
            token
        });

    } catch (err) {
        console.log(err);

        return res.status(500).json({
            status: false,
            message: "Signin failed",
            error: err.message
        });
    }
};