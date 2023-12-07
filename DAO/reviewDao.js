import {reviewModel, userModel} from '../Models/Model.js'

export const findReviewByMovie = (movieName) => reviewModel.find({movie : movieName})
export const findRecentReviewByUsername = (username) => reviewModel.find({username}).sort({date:-1}).limit(5)
export const createReview = (review) => reviewModel.create(review);
export const findRecentReviews = () => reviewModel.find().sort({date:-1}).limit(5)

export const findReivewByUser = (username, movie) => reviewModel.find({movie : movie, username :username})
export const findReivewById = (id) => reviewModel.find({_id: id})

export const updateReview = (review_id, review) =>
    userModel.updateOne({ _id: review_id }, { $set: review });
export const deleteReview = (username, movie) => reviewModel.deleteOne({movie : movie, username :username})