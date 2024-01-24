import mongoose, { Schema } from "mongoose";

import mongooseAggregatePaginate from mongooseAggregatePaginate;

const videoSchema = new Schema(
    {
        videoFile : {
            type : String, // cloudinary
            required : true
        },
        thumbnail : {
            type : String,
            required : true,
        },
        title : {
            type : String,
            required : true
        },
        description : {
            type : String,
            required : true
        },
        duration : {
            type : Number, 
            required : true
        },
        views : {
            type : Number,
            default : 0
        },
        isPiublished : {
            type : Boolean,
            default : true
        },
        owner : {
            type : Schema.Types.ObjectId,
            ref : "User"
        }

    },
    {
        timestamps : true
    }
)

videoSchema.plugin(mongooseAggregatePaginate) // to write aggregation queries

export const Video = mongoose.model("Video", videoSchema)