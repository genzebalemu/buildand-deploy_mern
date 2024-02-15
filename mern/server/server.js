import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from 'cors';
import axios from "axios";
import dotenv from "dotenv";
dotenv.config()
import morgan from "morgan";
import userRouter from "./routes/user.js";
import addtourRouter from "./routes/tour.js";
import conncetDB from "./database/database.js"
import connectDB from "./database/database.js";
const corsOptions = {
    origin: 'http://localhost:3000', // Replace with the origin of your client application
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: false,
    optionsSuccessStatus: 204,
  };
const port =  4000;
const app = express();
//databse connection
connectDB();

app.use(morgan("dev"))
app.use(cors(corsOptions));
app.use(express.json({limit:"30mb", extended:true}));
app.use(bodyParser.urlencoded({limit:"30mb", extended:true}));

app.use("/users", userRouter) //http://localhost:4000/users
app.use("/tour", addtourRouter); //http://localhost:4000/tour
// Connect to the local MongoDB database


app.get("/test", (req, res) => {
    res.json({ message: "Server is running." });
  });

app.get("/",(req,res)=>{
    res.json("hello users")
})

app.listen(port,(req,res)=>{
    console.log("server is running on port http://localhost:4000")
})