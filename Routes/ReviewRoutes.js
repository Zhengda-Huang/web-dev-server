import * as dao from "../DAO/reviewDao.js";
import {deleteReview, findReivewById, findReivewByUser, updateReview} from "../DAO/reviewDao.js";
import {findSingularMovieByUserName} from "../DAO/likedListDao.js";

function ReviewRoutes(app) {
    const findReviewsByMovie = async (req, res) => {
        const {movieName} = req.params;
        //console.log(movieName)
        const reviews = await dao.findReviewByMovie(movieName);
        //console.log(reviews)
        res.json(reviews);
    };

    const findRecentReviewsByUsername = async (req, res) => {
        const {username} = req.params;
        //console.log(username)
        const reviews = await dao.findRecentReviewByUsername(username);
        //console.log(reviews)
        res.json(reviews)
    }

    const findRecentReviews = async (req, res) => {
        const reviews = await dao.findRecentReviews();
        res.json(reviews)
    }

    const createReview = async (req, res) =>{
        const review = await dao.createReview(req.body);
        res.json(review);
    }

    const getReviewByUser = async (req, res) =>{
        const {username, movie} = req.params;
        const review = await dao.findReivewByUser(username, movie);
        res.json(review);
    }

    const deleteReview = async (req, res) =>{
        const {username, movie} = req.params;
        const review = await dao.deleteReview(username, movie)
        res.json(review);
    }

    const updateReview = async (req, res) =>{
        const { review_id } = req.params;
        console.log( req.body)
        const status = await dao.updateReview(review_id, req.body);
        const review = await dao.findReivewById(review_id)
        console.log(review)
        res.json(review)
    }


    app.get("/api/review/movieName/:movieName", findReviewsByMovie);
    app.get("/api/review/username/:username", findRecentReviewsByUsername);
    app.get("/api/review/recent", findRecentReviews)
    app.post("/api/review", createReview)
    app.delete("/api/review/username/:username/movie/:movie", deleteReview)
    app.get("/api/review/username/:username/movie/:movie", getReviewByUser)
    app.put("/api/review/:review_id", updateReview)

}

export default ReviewRoutes