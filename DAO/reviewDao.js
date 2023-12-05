import {reviewModel} from '../Models/Model.js'

export const findReviewByMovie = (movieName) => reviewModel.find({movie : "The Dark Knight"})
export const findRecentReviewByUsername = (username) => reviewModel.find({username}).sort({date:-1}).limit(5)
export const createReview = (review) => reviewModel.create(review);
export const findRecentReviews = () => reviewModel.find().sort({date:-1}).limit(5)