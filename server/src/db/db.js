import mongoose from "mongoose";

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("Database Connected!");
  } catch (error) {
    console.log("Database Connection is failed!");
    process.exit(1);
  }
};

export default connectDb;
