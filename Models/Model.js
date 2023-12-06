import mongoose from "mongoose";
import reviewSchema from "../Schema/reviewSchema.js";
import userSchema from "../Schema/userSchema.js";
import likedListSchema from "../Schema/likedListSchema.js";
const userModel = mongoose.model("users", userSchema);
const reviewModel = mongoose.model("reviews", reviewSchema);
const likeListModel = mongoose.model('like_list', likedListSchema)

export { userModel, reviewModel, likeListModel };



