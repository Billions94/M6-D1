import express from "express";
import cors from "cors";
import listEndpoints from "express-list-endpoints";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import productsRouter from "./apis/products/routes.js"
import createDefaultTables from "./db/createTables.js";
import {
  badRequest,
  unAuthorized,
  notFound,
  genericError,
} from "./errorHandlers.js";



const fname = fileURLToPath(import.meta.url);
const dname = dirname(fname);
const publicDirectory = path.join(dname, "../public");

const server = express();


server.use(cors());
server.use(express.json());
server.use(express.static(publicDirectory));

server.use("/products", productsRouter);


server.use(badRequest);
server.use(unAuthorized);
server.use(notFound);
server.use(genericError);
console.table(listEndpoints(server));

console.log(listEndpoints(server));

const { PORT } = process.env;

server.listen(PORT, async () => {
  console.log(`😁 Server is running on port ${PORT}`);
  await createDefaultTables();
});

server.on("error", (error) =>
  console.log(`Server is not running due to : ${error}`)
);
