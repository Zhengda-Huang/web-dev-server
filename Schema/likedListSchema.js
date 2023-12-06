import mongoose from "mongoose";
const likedListSchema = new mongoose.Schema({
        username: { type: String, required: true},
        movie : {type: String, required: true},
        date: Date,
    },
    { collection: "liked_list" });
export default likedListSchema;