import { NextResponse } from "next/server";
import connect from "@/app/utils/db";
import Post from "@/app/models/Post";

export const GET = async () => {
  try {
    const connection=await connect();
    const post = await Post.find();
    // return new NextResponse(post, { status: 200 });
    return NextResponse.json({post},{ status: 200 });
  } catch (error) {
    return new NextResponse("Something went wrong", { status: 500 });
  }
};
