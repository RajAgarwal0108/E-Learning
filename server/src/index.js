import dotenv from "dotenv";

import { app } from "./app.js";

import connectDB from "./db/index.js";



dotenv.config({
    path : './env'
})

connectDB() //return promise
.then(() => {

    //listening for error

    app.on("error",(error) => {
        console.log("errr :" , error);
        throw error;
    })
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is running at port : ${process.env.PORT}`);
    })
})
.catch((err) => {
    console.log("MONGO_DB connection falied !!",err);
})








