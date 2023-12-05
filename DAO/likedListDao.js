import likedListSchema from "../Schema/likedListSchema.js";

export const findMovieByUser = (username) => likedListSchema.find({username : username})

export const addMovieByUser = (like) => likedListSchema.create(like)

export const findSingularMovieByUserName = (username, movie) => likedListSchema.findOne({movie : movie, username :username})

export const removeFromLikedList = (username, movie) => likedListSchema.deleteOne({movie : movie, username :username})
