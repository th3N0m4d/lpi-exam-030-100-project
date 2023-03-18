const express = require("express");
const router = express.Router();
const dbConfig = require("../db/config");

/* GET home page. */
router.get("/", function (req, res, next) {
  const db = dbConfig.getDB();
  /**@todo abstract away this into a business layer */
  db.all("SELECT * FROM product", [], (err, rows = []) => {
    const products = rows.map(({ id, image_src, name, price }) => ({
      id,
      imageSrc: image_src,
      name,
      price,
    }));
    res.render("index", { title: "Home", products });
  });
});

module.exports = router;
