import mongoose from "mongoose";

const{Schema} = mongoose;

const blogSchema = new Schema({
    title:{
        type:"string",
        required:true
    },
    body:{
        type:"string",
        required:true
    }
},{timestamps: true});

const Blog = mongoose.models.Blog || mongoose.model("Blog",blogSchema)
export default Blog

