import { User } from "../models/user.model.js";
import { ApiError } from "../utils/ApiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import jwt from "jsonwebtoken";


export const verifyJWT = asyncHandler(async(req,_res,next) => {
   try {

    console.log(req.cookies);
     const token = req.cookies?.accessToken || req.header("Authorization")?.replace("Bearer ","")
 
     if(!token){
         throw new ApiError(401, "Unauthorized Request")
     }
 
     const decodedInfo = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)
 
     const user = await User.findById(decodedInfo?._id).select( "-passsword -refreshToken")
 
     if(!user){
         throw new ApiError(401, "Invalid Access Token")
     }
 
     req.user = user;
     next() // to run next method in route
   } catch (error) {
        throw new ApiError(401, error?.message || "Invalid Access Token")


    
   }
    
})