import express from 'express';
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";
// process.env.DB_CONNECTION_STRING ||
const CONNECTION_STRING = 'mongodb://127.0.0.1:27017/NeuMovieReview'
mongoose.connect(CONNECTION_STRING);
import session from "express-session";
import UserRoutes from "./Routes/UserRoutes.js";
import ReviewRoutes from "./Routes/ReviewRoutes.js";

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

app.listen(4000)