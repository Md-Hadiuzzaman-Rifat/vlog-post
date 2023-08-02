import mongoose from "mongoose";
const {Schema}=mongoose;
const postSchema=new Schema({
    title:{
        type:String,
        required:true,
    },
    category:{
        type:String,
        required: true,
    },
    description:{
        type: String,
        required: true
    },
    image:{
        type:String
    }
},{timestamps:true})
module.exports = mongoose.models.Post || mongoose.model("Post",postSchema)
