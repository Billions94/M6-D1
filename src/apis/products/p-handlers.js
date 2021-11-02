import pool from "../../db/connect.js"
import path from "path"

const getAll = async (_req, res, _next) => {
    try {
      const data = await pool.query('SELECT * FROM products ORDER BY id ASC;');
      res.send(data.rows);
    } catch (error) {
      res.status(400).send(error.message);
    }
  };
  
  const productImgCloud = async (req, res, _next) => {
    try {
      const cloudImg = req.file.path;
      const { name, description, brand, image_url, price, category } = req.body;
      const data = await pool.query(
        `INSERT INTO products( name, description, brand, image_url, price, category) VALUES( '${name}', '${description}', '${brand}', '${cloudImg}','${price}','${category}') RETURNING *;`
        /* [name, last_name, email] */
      );
  
      res.send(data.rows[0]);
    } catch (error) {
      res.status(400).send(error.message);
    }
  };

  const getById = async (req, res, _next) => {
    try {
      const data = await pool.query("SELECT * FROM products WHERE id=$1", [
        req.params.id,
      ]);
  
      if (data.rows.length === 0) {
        res.status(400).send("Product not found");
      } else {
        res.send(data.rows[0]);
      }
    } catch (error) {
      res.status(400).send(error.message);
    }
  };
  
  const createProducts = async (req, res, _next) => {
    try {
      const { name, description, brand, image_url, price, category } = req.body;
      const data = await pool.query(
        'INSERT INTO products(name, description, brand, image_url, price, category) VALUES($1,$2,$3,$4,$5,$6) RETURNING *;',
        [name, description, brand, image_url, price,category]
      );
  
      res.send(data.rows[0]);
    } catch (error) {
      res.status(400).send(error.message);
    }
  };
  
  const updateProductById = async (req, res, next) => {
    try {
        const { name, description, brand, image_url, price, category } = req.body;
      const data = await pool.query(
        "UPDATE products SET name=$1, description=$2, brand=$3, image_url=$4, price=$5, category=$6 WHERE id=$7 RETURNING *;",
        [name, description, brand, image_url, price, category, req.params.id]
      );
      res.send(data.rows[0]);
    } catch (error) {
      res.status(400).send(error.message);
    }
  };


  const addProductImage = async (req, res, next) => {
    try {
      const cover = req.file.path;
  
      const data = await pool.query(
        "UPDATE products SET image_url=$1 WHERE id=$2 RETURNING *;",
        [cover, req.params.id]
      );
  
      res.send(data.rows[0]);
    } catch (error) {
      next(error);
      console.log(error);
    }
  };

  
  const deleteproductsById = async (req, res, next) => {
    try {
      await pool.query("DELETE FROM products WHERE id=$1", [req.params.id]);
      res.status(204).send();
    } catch (error) {
      res.status(400).send(error.message);
    }
  };
  
  const productsHandler = {
    getAll,
    getById,
    createProducts,
    updateProductById,
    productImgCloud,
    addProductImage,
    deleteproductsById,
  };
  
  export default productsHandler;