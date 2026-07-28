import user from "../models/userData-models.js";

export const adduser = async (req, res) => {
    try {
        console.log(req.body);

        const result = await user.create(req.body);

        res.status(201).json({
            status: true,
            message: "user inserted successfully",
            data: result
        });

    } catch (err) {
        console.log(err);

        res.status(500).json({
            status: false,
            message: "Book inserting failed",
            err: err.message
        });
    }
};

export const updateUser = async (req, res) => {
    try {
        console.log(req.body)
        const result = await user.findByIdAndUpdate(req.body.id, req.body);

        res.json({
            status: 201,
            message: "user update successfully ",
            data: result
        })

    } catch (err) {
        console.log(err);

        res.status(500).json({
            status: false,
            message: "user inserted failed !",
            err: err.message
        })
    }
}

export const fetchUser = async (req, res) => {
    try {
        console.log(req.body);
        const result = await user.find();

        res.status(200).json({
            status: true,
            message: "user fetching successfully",
            data: result
        })
    } catch (err) {
        console.log(err);
        res.status(500).json({
            status: false,
            message: "user fetch feailed !",
            err: err.message

        })
    }
}

export const deleteUser = async (req,res) =>{
try{
    const result = await user.findByIdAndDelete(req.body.id);
    res.status(200).json({
        status:201,
        message:"user deleted successfully",
        data:result
    })

}catch(err){
    console.log(err);
    res.status(500).json({
        status:500,
        message:"user deleting feailed !",
        err:err.message
    })
}
}