import mongoose  from "mongoose";
import { DB_NAME } from "../constants.js";

// always use try catch and async await while connecting database [DB is in]

const connectDB = async () => {
    try{
        console.log(`${process.env.MONGODB_URI}/${DB_NAME}`)
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\n MongoDB connected !! DB Host: 
        ${connectionInstance.connection.host} ${connectionInstance.connection.name}`);

    }catch(error){
        console.log("DB Connection error", error);
        process.exit(1)

    }
}

export default connectDB;