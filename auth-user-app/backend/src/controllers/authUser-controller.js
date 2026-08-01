import authUser from "../models/authUser-module.js";

export const singUP = async (req, res) => {
    try {
        console.log(req.body)
        const result = await authUser.create(req.body)

        res.status(200).json({
            status: true,
            message: "singUp successfully ",
            data: result
        })
    } catch (err) {
        console.log(err);
        res.status(400).json({
            status: false,
            message: "singup failed",
            err: err.message
        })
    }
}

