import express from "express";
import data from "./data";

const app = express();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

// app.get('/', (req, res) => {
//     res.send("Got to http://localhost:5000/api/products")
// })

app.get("/api/products", (req, res) => {
  res.send(data.products);
});

app.listen(5000, () => {
  console.log("Server started in http://localhost:5000");
});
