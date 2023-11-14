
import { Tour }  from "../models/tour.js";
import mongoose from "mongoose";
export const createTour = async (req, res) => {
    const tour = req.body;
    const newTour = new Tour({
      ...tour,
      creator: req.userId,
      createdAt: new Date().toISOString(),
    });

    try {
        await newTour.save();
        res.status(200).json(newTour);
    } catch (error) {
        res.status(404).json({ message: "Something went wrong" });
    }}

   export const getTours = async(req,res) =>{
    try {
        const tours = await Tour.find({})
        res.status(200).json(tours)
    } catch (error) {
        res.status(404).json({message:"something went wrong"});
    }
}


export const getTour = async (req, res) => {
    const id = req.params;
    try {
        const tour = await Tour.findById(id);
        if (!tour) {
            res.status(404).json({ message: "Tour not found" });
            return;
        }
        res.status(200).json(tour);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
}

export const getToursByUser = async(req,res)=>{
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        res.status(404).json("User ID is not a valid ObjectId");
        return;
    }
    const userTours = await Tour.find({creator:id})
    res.status(200).json(userTours)
}

// export const deleteTour= async(req,res)=>{
//     const {id} = req.params;
//     // const id=req.paras.id;
//     try {
//         if (!mongoose.type.invalid(id)){
//             res.status(404).json("user is not exist in mongodb")
//         }
//         await Tour.findByIdAndRemove( id)
//         res.json("tour deleted successfuly")
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: "Internal server error" });
//     }
    
// }

// export const updateTour= async(req,res)=>{
//     const {id} = req.params;
//     const {title,description,tags,imageFile,creator} = req.body;
//     try {
//         if (!mongoose.type.invalid(id)){
//             res.status(404).json("user is not exist in mongodb")
//         }
       
//         const updatedTour = Tour ({
//             title,
//             description,
//             imageFile,
//             tags,
//             creator,
//             _id:id
//         })
       
    
//      await Tour.findByIdAndUpdate(id, updatedTour,{new:true})
//      res.json(updatedTour);
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: "Internal server error" });
//     }
// }