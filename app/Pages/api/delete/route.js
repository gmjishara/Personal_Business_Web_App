import connect from "@/app/utils/db";
import { NextResponse } from "next/server";
import Post from "@/app/models/Post";

export const DELETE=async(request)=>{
    const{name,age,gender}=await request.json();
    await connect();
    const res=await Post.insertMany({name,age,gender});
    return new NextResponse("create completed",{status:200})
}