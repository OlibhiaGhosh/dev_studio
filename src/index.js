import connectDB from "./db/index.js";
import dotenv from "dotenv"
import express from "express";
const app= express()
dotenv.config({
    path: './.env'
})
connectDB().then(()=>{
    app.listen(process.env.PORT||8000, ()=>{
        console.log(`server is running on port ${process.env.PORT}`);
        
    })   
}).catch ((error) => {
    console.log("Connection to DB failed", error);
    
})