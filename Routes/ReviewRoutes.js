import * as dao from "../DAO/reviewDao.js";

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

    app.get("/api/review/movieName/:movieName", findReviewsByMovie);
    app.get("/api/review/username/:username", findRecentReviewsByUsername);
    app.get("/api/review/recent", findRecentReviews)
    app.post("/api/review", createReview)

}

export default ReviewRoutes