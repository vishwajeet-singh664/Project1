const express = require("express");
const app = express();
let bodyParser = require("body-parser");

app.use(bodyParser.json());
app.get("/hello-world", (req, res) => {
  res.send("Hello");
});

app.post("/new-request", (req, res) => {
  res.send(req.body);
});

app.listen("3000", () => {
  console.log("Listening at 3000");
});
