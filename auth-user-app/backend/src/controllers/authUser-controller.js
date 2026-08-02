import authUser from "../models/authUser-module.js";

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
    try {
        console.log(req.body);
        const result = await authUser.create(req.body);

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

