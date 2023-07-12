import mongoose from "mongoose";

const connect = async () => {
  try {
    mongoose.connect(process.env.DATABASE_URL);
    mongoose.set('strictQuery', false);
    console.log("connection done");
  } catch (error) {
    throw new Error("Connection Failed.");
  }
};
export default connect
