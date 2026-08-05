import product from "../models/product-model.js";
export const fetchProduct = async (req, res) => {
    try {

        const result = await product.find();

        res.status(200).json({
            status: true,
            Message: "product fetching successfully",
            data: result
        })

    } catch (err) {
        console.log(err);
        res.status(400).json({
            status: false,
            Message: "product fetching failed",
            err: err.Message
        })
    }
}

export const addProduct = async (req, res) => {
    try {
        console.log(req.body)
        const result = await product.create(req.body);

        res.status(201).json({
            status: true,
            Message: "product added successfully",
            data: result
        })

    } catch (err) {
        console.log(err);
        res.status(400).json({
            status: false,
            Message: "product adding failead",
            err: err.Message

        })
    }
}

export const updataProduct = async () => {
    try {
        console.log(req.body);

        const result = await Product.findByIdAndUpdate(req.body._id, req.body);

        res.status(200).json({
            status: true,
            Message: "product updating successfully",
            data: result
        })

    } catch (err) {
        console.log(err);
        res.status(400).json({
            status: false,
            Message: "product updateing failed ",
            err: err.Message
        })
    }
}

export const deleteProduct = async (req, res) => {
    try {
        console.log(req.body)
        const result = await product.findByIdAndDelete(req.body.id, req.body);

        res.status(200).json({
            status: true,
            Message: "product deleted successfully",
            data: result
        })

    } catch (err) {
        console.log(err);
        res.status(400).json({
            status: false,
            Message: "product deleting failed",
            err: err.Message
        })
    }
}