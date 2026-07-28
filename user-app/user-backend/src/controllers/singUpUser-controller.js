import user from "../models/singUpUser-models.js";

export const addSingUpUser = async (req, res) => {
    try {
        console.log(user.body)
        const result = await user.create(req.body);

        res.status(201).json({
            status:true,
            message:"user add successfully",
            data:result
        })

    } catch (err) {
        console.log(err);
        res.status(500).json({
            status: false,
            message: "add user failed",
            err:err.message
        })
    }
}

export const getSingUpUser = async (req, res) => {
    try {
        console.log(req.body)
        const result = await user.find();
        res.status(201).json({
            status:true,
            message:"user fetchin successfully ",
            data:result
        })


    } catch (err) {
        console.log(err);
        res.status(500).json({
            status: false,
            message: "user fetching failed",
            err: err.message
        })
    }
}