const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mysql = require("mysql");

const app = express();
const port = 3001;

const db = mysql.createPool({
  host: "localhost",
  user: "vinicin",
  password: "08003484",
  database: "Products_DataBase",
});

app.use(cors());
app.use(express.json());

app.post("/api/insert", (req, res) => {
  const { coffeeName } = req.body;
  const { coffeeDescription } = req.body;
  const { coffeePrice } = req.body;

  let mySQL =
    "INSERT INTO CoffeeDB (coffeeName, coffeeDescription, coffeePrice) VALUES (?, ?, ?)";
  db.query(
    mySQL,
    [coffeeName, coffeeDescription, coffeePrice],
    (err, result) => {
      if (err) console.log(err);
      else console.log(`${coffeeName} has been inserted`);
    }
  );
});

app.get("/api/get", (req, res) => {
  let mySQL = "SELECT * from CoffeeDB";
  db.query(mySQL, (err, result) => {
    if (err) console.log(err);
    else res.send(result);
  });
});

app.listen(port, () => console.log(`App listening on port ${port}!`));
