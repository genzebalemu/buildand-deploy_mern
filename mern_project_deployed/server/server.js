import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import axios from "axios";
import dotenv from "dotenv";
dotenv.config()
import morgan from "morgan";
import userRouter from "./routes/user.js";
import conncetDB from "./database/database.js"
import connectDB from "./database/database.js";
const port = process.env.PORT || 4000;
const app = express();
//databse connection
connectDB();

app.use(morgan("dev"))
app.use(cors());
app.use(express.json({limit:"30mb", extended:true}));
app.use(bodyParser.urlencoded({limit:"30mb", extended:true}));

app.use("/users", userRouter)

// Connect to the local MongoDB database




app.get("/",(req,res)=>{
    res.json("hello users")
})


app.listen(port,(req,res)=>{
    console.log("server is running on port http://localhost:4000")
})