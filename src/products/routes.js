import express from 'express'
import fs from 'fs-extra'
import uniqid from 'uniqid'
import path, { dirname } from 'path'
import { fileURLToPath } from 'url'
import { productsValidation } from './validation.js'
import { validationResult } from "express-validator";
import createHttpError from "http-errors";
import productsHandler from './p-handlers.js'


const productsRouter = express.Router();

productsRouter.get('/', productsHandler.getAll)

productsRouter.post('/', productsHandler.createProducts)

productsRouter.route('/:id').get(productsHandler.getById).put(productsHandler.updateProductById).delete(productsHandler.deleteproductsById)

export default productsRouter