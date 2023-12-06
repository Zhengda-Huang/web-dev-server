import {reviewModel, userModel} from '../Models/Model.js'

export const findReviewByMovie = (movieName) => reviewModel.find({movie : "The Dark Knight"})
export const findRecentReviewByUsername = (username) => reviewModel.find({username}).sort({date:-1}).limit(5)
export const createReview = (review) => reviewModel.create(review);
export const findRecentReviews = () => reviewModel.find().sort({date:-1}).limit(5)

export const findReivewByUser = (username, movie) => reviewModel.find({movie : movie, username :username})

export const updateReview = (username, movie, review) =>
    userModel.updateOne({ username: username, movie: movie }, { $set: review });
export const deleteReview = (username, movie) => reviewModel.deleteOne({movie : movie, username :username})