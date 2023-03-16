const express = require("express");
const router = express.Router();

const featuredProducts = [
  {
    imageSrc: "images/item-02.jpg",
    name: "Herschel supply co 25l",
    price: "$75.00",
    info: "New",
  },
  {
    imageSrc: "images/item-02.jpg",
    name: "Denim jacket blue",
    price: "$95.00",
  },
  {
    imageSrc: "images/item-02.jpg",
    name: "Coach slim easton black",
    price: "$165.90",
  },
  {
    imageSrc: "images/item-02.jpg",
    name: "Frayed denim shorts",
    price: "$165.90",
    newPrice: "$15.90",
    info: "Sale",
  },
  {
    imageSrc: "images/item-02.jpg",
    name: "Denim jacket blue",
    price: "$95.00",
  },
  {
    imageSrc: "images/item-02.jpg",
    name: "Coach slim easton black",
    price: "$165.90",
  },
];

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Home", featuredProducts });
});

module.exports = router;
