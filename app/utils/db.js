import mongoose from "mongoose";

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
  } catch (error) {
    return new NextResponse("Connection Failed", { status: 500 });;
  }
};

export default connect;
