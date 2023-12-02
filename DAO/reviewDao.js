import {reviewModel} from '../Models/Model.js'

export const findReviewByMovie = (movieName) => reviewModel.find({movie : "The Dark Knight"})
export const createReview = (review) => reviewModel.create(review);