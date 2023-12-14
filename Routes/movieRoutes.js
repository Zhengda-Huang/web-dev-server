import * as dao from "../DAO/movieDao.js";
import {findRandomMovie} from "../DAO/movieDao.js";


function MovieRoutes(app) {

    const randomMovie = async (req, res) => {
        const result = await dao.findRandomMovie()
        res.json(result)
    }

    app.get("/api/movie", randomMovie)
}

export default MovieRoutes