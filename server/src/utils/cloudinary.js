import {v2 as cloudinary} from "cloudinary";


import fs from "fs"; // file system by nodejs

         
cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
  api_key: CLOUDINARY_API_KEY,
  api_secret: CLOUDINARY_API_SECRET 
});

const uploadOnCloudinary = async (localFilePath) => {
    try {
        if (!localFilePath) return null
        // upload the file on cloudinary
        const response = await cloudinary.uploader.upload(localFilePath,{
            resource_type : "auto"
        })
        // file has been uplloaded
        console.log("file has been uploaded on cloudinary", response.url);
        return response
        
    } catch (error) {
        fs.unlinkSync(localFilePath) //remove the locally saved temproary file as the upload operation get failed
        return null
        
    }
}


export {uploadOnCloudinary}