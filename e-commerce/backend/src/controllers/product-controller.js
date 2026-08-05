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

export const updateProduct = async (req, res) => {
    try {
        console.log(req.body);

        const result = await product.findByIdAndUpdate(
            req.body.id,
            req.body
        );

        if (!result) {
            return res.status(404).json({
                status: false,
                message: "Product not found"
            });
        }

        res.status(200).json({
            status: true,
            message: "Product updated successfully",
            data: result
        });

    } catch (err) {
        console.log(err);

        res.status(400).json({
            status: false,
            message: "Product updating failed",
            error: err.message
        });
    }
};

export const deleteProduct = async (req, res) => {
    try {
        console.log(req.body);

        const result = await product.findByIdAndDelete(req.body.id);

        if (!result) {
            return res.status(404).json({
                status: false,
                message: "Product not found"
            });
        }

        res.status(200).json({
            status: true,
            message: "Product deleted successfully",
            data: result
        });

    } catch (err) {
        console.log(err);

        res.status(400).json({
            status: false,
            message: "Product deleting failed",
            error: err.message
        });
    }
};