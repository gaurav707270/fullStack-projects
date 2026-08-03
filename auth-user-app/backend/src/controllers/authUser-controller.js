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

        console.log("user singIn successfully")

        if (!singInUser) {
            res.status(400).json({
                status: false,
                message: "user not found"
            });

            const isMatch = await bcrypt.compare(password, authUser.password)

            if (isMatch) {

                const token = jwt.sign({ userId: authUser._id, email: authUser.email },
                    "!@#$%^&*()",
                    { expiresIn: "1h" }
                );

                res.cookie("token", token, {
                    httpOnly: true,
                    maxAge: 1000 * 60 * 60
                })

                // const token = jwt.sign(authUser,"S@chin7072",{expiresIn:"1h"})


                res.status(200).json({
                    status: true,
                    message: "user singIn successfully ",
                    token
                })
            } else {
                res.status(400).json({
                    status: false,
                    message: "email or password wrong"
                });
            };
        }

    } catch (err) {
        console.log(err);
        res.status(400).json({
            status: false,
            message: "authuser singin failed ",
            err: err.message
        });
    }
};