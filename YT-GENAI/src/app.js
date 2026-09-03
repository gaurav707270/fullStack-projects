import express from "express";

import { authRouter } from "./routes/auth.routes";

export const app = express();

app.use(express.json())


// app.use("/api/auth",authRouter)

// <<<<<<< HEAD
// =======
// module.exports = app;node
// >>>>>>> ca63b0ec1f5691428d6ee7ff21820778b3364c7a
