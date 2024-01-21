import mongoose, { mongo } from "mongoose";
import { DB_NAME } from "../constants.js";

// always use try catch and async await while connecting database [DB is in other continent]

const connectDB = async () => {
    try{

        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\n MongoDB connected !! DB Host: 
        ${connectionInstance.connection.host}`);

    }catch(error){
        console.log("DB Connection error", error);
        process.exit(1)

    }
}

export default connectDB;