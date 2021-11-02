import express from "express";
import pool from "../db/connect.js"
import reviewsHandler from "../reviews/handlers.js"
// import { reviewsValidation } from "./validation.js";
// import { getReviews, writeReviews } from "./db.js";
// import { validationResult } from "express-validator";
// import createHttpError from "http-errors";
// import uniqid from "uniqid";


const reviewsRouter = express.Router();

reviewsRouter.get('/', reviewsHandler.getAll)

reviewsRouter.post('/', reviewsHandler.createReview)


export default reviewsRouter
