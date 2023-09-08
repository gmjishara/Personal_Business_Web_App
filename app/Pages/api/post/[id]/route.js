import { NextResponse } from "next/server";
import connect from "@/app/utils/db";
import Post from "@/app/models/Post";

export const PUT=async(request,{params})=>{
    const {id} = params;
    console.log(id)
    const {name,age,gender} =  await request.json();
    await connect();
    // await Post.findByIdAndUpdate(id,{name,age,gender})
    await Post.updateOne({name:id},{$set:{name:name,age:age,gender:gender}})
    return NextResponse.json({message:"updated successfully",status:201});
}

export const DELETE=async(request,{params})=>{
    const {id} = params;
    await connect();
    await Post.deleteOne({name:id});
    return NextResponse.json({message:"deleted successfully",status:201});
}