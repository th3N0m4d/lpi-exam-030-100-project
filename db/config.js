const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("e-commerce.db");
const { products } = require("./seed-data");

module.exports = {
  getDB() {
    return db;
  },
  init() {
    // Tables
    db.run(
      "CREATE TABLE IF NOT EXISTS product (id INTEGER PRIMARY KEY AUTOINCREMENT, image_src TEXT, name TEXT, price REAL)"
    );

    /**@todo is there a better way to "restart" the DB? */
    db.run("DELETE FROM product");

    const sqlStatement = db.prepare(
      "INSERT INTO product (image_src, name, price) VALUES (?, ?, ?)"
    );

    products.forEach(({ imageSrc, name, price }) => {
      sqlStatement.run(imageSrc, name, price);
    });

    sqlStatement.finalize();
  },
  close() {
    db.close();
  },
};
