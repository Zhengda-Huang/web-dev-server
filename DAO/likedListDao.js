import {likeListModel} from "../Models/Model.js";

export const findMovieByUser = (username) => likeListModel.find({username : username})

export const addMovieByUser = (like) => likeListModel.create(like)

export const findSingularMovieByUserName = (username, movie) => likeListModel.find({username : username, movie: movie})
export const removeFromLikedList = (username, movie) => likeListModel.deleteOne({movie : movie, username :username})
