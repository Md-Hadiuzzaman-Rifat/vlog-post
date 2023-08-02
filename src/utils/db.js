import mongoose from "mongoose";

const connect = async () => {
  try {
    mongoose.set('strictQuery', false);
    mongoose.connect(process.env.DATABASE_URL);
    console.log("connection done");
  } catch (error) {
    throw new Error("Connection Failed.");
  }
};
export default connect
