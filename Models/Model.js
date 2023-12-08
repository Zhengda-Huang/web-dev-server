import mongoose from "mongoose";
import reviewSchema from "../Schema/reviewSchema.js";
import userSchema from "../Schema/userSchema.js";
import likedListSchema from "../Schema/likedListSchema.js";
import followSchema from "../Schema/followSchema.js";
const userModel = mongoose.model("users", userSchema);
const reviewModel = mongoose.model("reviews", reviewSchema);
const likeListModel = mongoose.model('like_list', likedListSchema)
const followModel = mongoose.model('followList', followSchema)

export { userModel, reviewModel, likeListModel, followModel};



