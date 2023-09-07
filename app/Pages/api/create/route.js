import connect from "@/app/utils/db";
import { NextResponse } from "next/server";
import Post from "@/app/models/Post";

export const POST=async(request)=>{
    const{name,age,gender}=await request.json();
    await connect();
    const res=await Post.insertMany({name,age,gender});
    return NextResponse({message:"create completed"},{status:201})
}