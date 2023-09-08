import Blog from "@/app/models/Blog";
import connect from "@/app/utils/db";
import { NextResponse } from "next/server";

export const GET = async () => {
    try {
      const connection=await connect();
      const blog = await Blog.find();
      return NextResponse.json({blog},{ status: 200 });
    } catch (error) {
      return new NextResponse("Something went wrong", { status: 500 });
    }
  };

