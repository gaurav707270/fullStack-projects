import express from "express";

const app = express()

app.get("/",(req,res) =>{
    res.end("server now started ")
})

app.listen(3000)