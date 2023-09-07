import mongoose from "mongoose";

const{Schema} = mongoose;

const postSchema = new Schema({
    name:{
        type:"string",
        unique:true,
        required:true
    },
    age:{
        type:"number",
        unique:true,
        required:true
    },
    gender:{
        type:"string",
        required:true
    }
},{timestamps: true});

const Post = mongoose.models.Postmaster || mongoose.model("Postmaster",postSchema)
export default Post

