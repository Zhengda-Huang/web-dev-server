import express, {application} from 'express';
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";
// process.env.DB_CONNECTION_STRING ||
const CONNECTION_STRING = 'mongodb+srv://davidhuang:86560067@cluster0.oqdjfkx.mongodb.net/?retryWrites=true&w=majority'
mongoose.connect(CONNECTION_STRING, {dbName: "NeuMovieReview"});
import session from "express-session";
import UserRoutes from "./Routes/UserRoutes.js";
import ReviewRoutes from "./Routes/ReviewRoutes.js";
import LikedListRoutes from "./Routes/LikedListRoutes.js";
import FollowsRoutes from "./Routes/FollowRoutes.js";
import MovieRoutes from "./Routes/movieRoutes.js";

const app = express();

app.use(
    cors({
        credentials: true,
        origin: process.env.FRONTEND_URL
    })
);

const sessionOptions = {
    secret: "any string",
    resave: false,
    saveUninitialized: false,
};

if (process.env.NODE_ENV !== "development") {
    sessionOptions.proxy = true;
    sessionOptions.cookie = {
        sameSite: "none",
        secure: true,
    };
}

app.use(
    session(sessionOptions)
);

app.use(express.json());
ReviewRoutes(app)
UserRoutes(app);
LikedListRoutes(app);
FollowsRoutes(app)
MovieRoutes(app)

app.listen(4000)