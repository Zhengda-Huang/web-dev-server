import mongoose from "mongoose";
const reviewsSchema = new mongoose.Schema({
        movie : {type: String, required: true},
        username: { type: String, required: true },
        review : {type: String, required: true},
        date: Date,
        rating: String
    },
    { collection: "reviews" });
export default reviewsSchema;