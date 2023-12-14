import mongoose, {mongo} from "mongoose";
import reviewSchema from "../Schema/reviewSchema.js";
import userSchema from "../Schema/userSchema.js";
import likedListSchema from "../Schema/likedListSchema.js";
import followSchema from "../Schema/followSchema.js";
import movieSchema from "../Schema/movieSchema.js";
const userModel = mongoose.model("users", userSchema);
const reviewModel = mongoose.model("reviews", reviewSchema);
const likeListModel = mongoose.model('like_list', likedListSchema)
const followModel = mongoose.model('followList', followSchema)

const movieModel = mongoose.model("movie", movieSchema)

export { userModel, reviewModel, likeListModel, followModel, movieModel};



