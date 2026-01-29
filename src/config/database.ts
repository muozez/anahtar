import mongoose from "mongoose";
import secrets from "./dotenv.ts";

export const connectDB = async () => {
  await mongoose.connect(secrets.mongodbUri);
};

export const disconnectDB = async () => {
  await mongoose.disconnect();
};

export default mongoose;
