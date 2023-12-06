import * as dao from "../DAO/likedListDao.js";

function LikedListRoutes(app) {
    const findLikedMovieByUser = async (req, res) => {
        const {username} = req.params;
        const movies = await dao.findMovieByUser(username);
        res.json(movies);
    };

    const createLikedByUser = async (req, res) => {
        const like = req.body
        const result = await dao.addMovieByUser(like)
        res.json(result)
    }

    const findSingularMovieByUserName = async (req, res) => {
        const {username, movie} = req.params;
        const movies = await dao.findSingularMovieByUserName(username, movie);
        if (movies.length >= 1) {
            res.json(movies)
        } else {
            res.json([])
        }
    }

    const removeFromLikedList = async (req, res) => {
        const {username, movie} = req.params;
        const movies = await dao.removeFromLikedList(username, movie);
        res.json(movies)
    }

    app.get("/api/liked/:username", findLikedMovieByUser);
    app.get("/api/liked/username/:username/movie/:movie", findSingularMovieByUserName)
    app.delete("/api/liked/username/:username/movie/:movie", removeFromLikedList)
    app.post("/api/liked", createLikedByUser);


}

export default LikedListRoutes;
