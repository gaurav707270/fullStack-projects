import jwt from "jsonwebtoken";


export const checkAuthentications = (req, res, next) => {
    try {
        // const token = req.headers.authorization.split(" ")[1];
        const token = req.cookies.token
        if (!token) {
            res.status(400).json({
                status: false,
                message: "token are missing"
            })
        }

        const data = jwt.verify(token, "!@#$%^&*()");
        res.user = data;
        next()

    } catch (err) {
        console.log(err);
        res.status(500).json({
            status: false,
            Message: "request failed",
            err: err.Message
        })
    }
}