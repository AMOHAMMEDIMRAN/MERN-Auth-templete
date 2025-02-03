import mongoose from "mongoose";

const connectDB = async (URI) => {
    try {
        await mongoose.connect(URI);
        console.log("The Database was connected sucessfully");
    } catch (error) {
        console.log(`The error is ${error}`);
        process.exit(1);
    }
}
export default connectDB;