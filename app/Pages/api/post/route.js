import { NextResponse } from "next/server";
import connect from "@/app/utils/db";
import Post from "@/app/models/Post";

export const GET = async (request) => {
  try {
    const connection=await connect();
    const post = await Post.find().lean();
    return new NextResponse(post, { status: 200 });
  } catch (error) {
    return new NextResponse("Database Error", { status: 500 });
  }
};
