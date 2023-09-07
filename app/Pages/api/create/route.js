import connect from "@/app/utils/db";
import { NextResponse } from "next/server";
import Post from "@/app/models/Post";

export const POST=async(request)=>{
    const{name,age,gender}=await request.json();
    await connect();
    await Post.create({name,age,gender});
    return new NextResponse("create completed",{status:200})
}