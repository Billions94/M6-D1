import pool from "../db/connect.js"

const getAll = async (_req, res, _next) => {
    try {
      const data = await pool.query('SELECT * FROM reviews ORDER BY id ASC;');
      res.send(data.rows);
    } catch (error) {
      res.status(400).send(error.message);
    }
  };
  
  const getById = async (req, res, _next) => {
    try {
      const data = await pool.query("SELECT * FROM reviews WHERE id=$1", [
        req.params.id,
      ]);
      /**
       *
       *  data.rows is an array of objects
       * if its empty it means no match!
       * we check if its empty we will send 404
       * else we will send first object found as response
       */
  
      if (data.rows.length === 0) {
        res.status(400).send("User not found");
      } else {
        res.send(data.rows[0]);
      }
    } catch (error) {
      res.status(400).send(error.message);
    }
  };
  
  const createReview = async (req, res, _next) => {
    try {
      const { comment, rate, product_id } = req.body;
      const data = await pool.query(
        'INSERT INTO reviews(comment,rate,product_id) VALUES($1,$2,$3) RETURNING *;',
        [comment, rate, product_id]
      );
  
      res.send(data.rows[0]);
    } catch (error) {
      res.status(400).send(error.message);
    }
  };
  
  const updateReviewById = async (req, res, next) => {
    try {
        const { comment, rate, brand, product_id } = req.body;
      const data = await pool.query(
        "UPDATE reviews SET name=$1,last_name=$2,email=$3 WHERE id=$4 RETURNING *;",
        [name, last_name, email, req.params.id]
      );
      res.send(data.rows[0]);
    } catch (error) {
      res.status(400).send(error.message);
    }
  };
  
  const deleteReviewsById = async (req, res, next) => {
    try {
      await pool.query("DELETE FROM reviews WHERE id=$1", [req.params.id]);
      res.status(204).send();
    } catch (error) {
      res.status(400).send(error.message);
    }
  };
  
  const reviewsHandler = {
    getAll,
    getById,
    createReview,
    updateReviewById,
    deleteReviewsById,
  };
  
  export default reviewsHandler;