import mongoose from "mongoose";

async function connectMongoDB() {
  try {
    await mongoose.connect(process.env.MONGO_URI as string, {
      autoIndex: true,
    });
    console.log("Connected to the database");
  } catch (error) {
    console.log(error);
  }
}

export default connectMongoDB;
