import * as dao from "../DAO/reviewDao.js";

function ReviewRoutes(app) {
    const findReviewsByMovie = async (req, res) => {
        const {movieName} = req.params;
        console.log(movieName)
        const reviews = await dao.findReviewByMovie(movieName);
        console.log(reviews)
        res.json(reviews);
    };

    const createReview = async (req, res) =>{
        const review = await dao.createReview(req.body);
        res.json(review);
    }

    app.get("/api/review/:movieName", findReviewsByMovie);
    app.post("/api/review", createReview)

}

export default ReviewRoutes