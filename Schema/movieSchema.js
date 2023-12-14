import mongoose from "mongoose";
const movieSchema = new mongoose.Schema({
        movie : {type: String, required: true}
    },
    { collection: "movies" });
export default movieSchema;