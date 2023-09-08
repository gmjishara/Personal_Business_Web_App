import { NextResponse } from "next/server";
import connect from "@/app/utils/db";
import Post from "@/app/models/Post";

export const GET = async () => {
  try {
    const connection=await connect();
    const post = await Post.find();
    return NextResponse.json({post},{ status: 200 });
  } catch (error) {
    return new NextResponse("Something went wrong", { status: 500 });
  }
};

export const POST=async(request)=>{
  const{name,age,gender}=await request.json();
  await connect();
  const res=await Post.insertMany({name,age,gender});
  return NextResponse.json({message:"create completed"},{status:201});
}

