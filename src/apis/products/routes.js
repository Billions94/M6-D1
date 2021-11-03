import express from "express";
import fs from "fs-extra";
import uniqid from "uniqid";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import { productsValidation } from "./validation.js";
import { validationResult } from "express-validator";
import createHttpError from "http-errors";
import productsHandler from "./p-handlers.js";
import reviewsHandler from "../reviews/r-handler.js";
import multer from "multer"
import { CloudinaryStorage } from "multer-storage-cloudinary"
import { v2 as cloudinary } from "cloudinary"

const productsRouter = express.Router();


// PRODUCT SECTION
const cloudinaryStorage = new CloudinaryStorage({
    cloudinary, // CREDENTIALS, 
    params: {
      folder: "amazon-db",
    },
  })

productsRouter.get("/", productsHandler.getAll);

productsRouter.post("/", productsHandler.createProducts);

productsRouter.post("/uploadCloud", multer({ storage: cloudinaryStorage}).single('picture'), productsHandler.productImgCloud);

productsRouter
  .route("/:id/productCover")
  .put(
    multer({ storage: cloudinaryStorage }).single("picture"),
    productsHandler.addProductImage
  );

productsRouter
  .route("/:id")
  .get(productsHandler.getById)
  .put(productsHandler.updateProductById)
  .delete(productsHandler.deleteproductsById);

// REVIEWS SECTION

productsRouter
  .route("/:id/reviews")
  .get(reviewsHandler.getById)
  .post(reviewsHandler.createReview);

productsRouter
  .route("/:id/reviews")
  .get(reviewsHandler.getById)

  
productsRouter
  .route("/:id/reviews/:reviewId")
  .put(reviewsHandler.updateReviewById)
  .delete(reviewsHandler.deleteReviewById);

export default productsRouter;
