const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mysql = require("mysql");

const db = mysql.createPool({
  host: "localhost",
  user: "vinicin",
  password: "08003484",
  database: "Products_DataBase",
});

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Estamos trabalhando");
});

app.post("/api/insert", (req, res) => {
  const productName = req.body.productName;
  const productDescription = req.body.productDescription;

  const sqlInsert =
    "INSERT INTO products (productName, productDescription) VALUES (?,?)";
  db.query(sqlInsert, [productName, productDescription], (err, result) => {
    if (err) {
      console.log(err);
    }
    if (result) {
      console.log(`${productName} has been inserted`);
    }
  });
});

app.listen(port, () => console.log(`App listening on port ${port}!`));
