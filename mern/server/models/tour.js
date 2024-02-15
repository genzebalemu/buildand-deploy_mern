import mongoose from "mongoose";

const tourSchema = mongoose.Schema({
    title:String,
    description:String,
    tags:[String],
    creator: String,
    name:String,
    imageFile:String,
    createdAt: {
        type: Date,
        default: new Date(),
    },
    likeCount:{
        type:Number,
        default:0
    } 
});

const Tour = mongoose.model('Tour', tourSchema);
export { Tour };