const express = require("express");
const router = express.Router();

module.exports = (db) => {
  router.get("/", (req, res) => {
    db.query(`SELECT * FROM events;`)
      .then((data) => {
        const events = data.rows;
        console.log(res.json({ events }));
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });
  return router;
};