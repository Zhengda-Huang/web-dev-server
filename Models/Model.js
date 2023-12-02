import mongoose from "mongoose";
import reviewSchema from "../Schema/reviewSchema.js";
import userSchema from "../Schema/userSchema.js";

const userModel = mongoose.model("users", userSchema);
const reviewModel = mongoose.model("reviews", reviewSchema);

export { userModel, reviewModel };


