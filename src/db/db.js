import fs from 'fs-extra';
import { fileURLToPath } from 'url'
import { dirname, join, } from 'path'

const { readFile, writeFile} = fs 

export const dataFolderPath = join(dirname(fileURLToPath(import.meta.url)), '../data')
console.log(dataFolderPath)

const reviewsSQLPath = join(dataFolderPath, 'reviews.sql')
console.log(reviewsSQLPath)
const productsSQLPath = join(dataFolderPath, 'products.sql')
console.log(productsSQLPath)

export const getReviews = () => readFile(reviewsSQLPath)
export const writeReviews = content => writeFile(reviewsSQLPath, content)

export const getProducts = () => readFile(productsSQLPath)
export const writeProducts = content => writeFile(productsSQLPath, content)

