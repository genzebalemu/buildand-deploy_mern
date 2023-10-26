
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { User } from "../models/user.js";
const secret ="test";

export const signup = async (req,res)=>{
    const {email,password,firstName,lastName} = req.body;
    try {
        const existedUser = await User.findOne({email}) 
        if(existedUser){
           return res.status(400).json({message:"user already signup"})
        }
        const hashedPassword = await bcrypt.hash(password,12);
        const newUser = User.create({
            email,
            password:hashedPassword,
            name:`${firstName} ${lastName}`,
        });
 
        const token = jwt.sign({email:newUser.email,id:newUser._id},secret,{expiresIn:"1h"});
        res.status(201).json({ user: newUser, token })

    } catch (error) {
        res.status(500).json({message:"something went wrong"});
        console.log(error);

    }
}


export const signin = async (req,res)=>{
    const {email,password} = req.body;
    try {
        const existedUser = await User.findOne({email});
        if(!existedUser){
            return res.status(404).json({"message":"user not registered "})
        }
        const matchedPassword = await bcrypt.compare(password, existedUser.password);
        if (!matchedPassword){
           return  res.status(400).json({"message":"invalid creentials "})
        }
        const token = jwt.sign( {email:existedUser.email,id:existedUser._id},secret,{expiresIn:"1h"} )
        res.status(200).json({user:existedUser, token})
    } catch (error) {
        res.status(500).json({message:"something went wrong"});
        console.log(error);
    }
}

