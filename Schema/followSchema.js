import mongoose from "mongoose";
const followSchema =  new mongoose.Schema(
    {
        follower: { type: String },
        followed: { type: String },
    },
    { collection: "follows" }
);

export default followSchema;