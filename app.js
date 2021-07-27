/* eslint-disable no-undef */
let express = require("express");
let bodyParser = require("body-parser");
let path = require("path");
let request = require("request");

let app = express();
app.use(bodyParser.urlencoded({ extended: true }));

const port = 8085;

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "/index.html"));
});

app.post("/", function (req, res) {
  let url = req.body.getdata;

  request.get({ url: url }, function (error, response, body) {
    res.send(body);
  });
});
app.use("/static", express.static("static"));
app.listen(port);

console.log("Your server is running on 8085 port");
console.log("http://localhost:8085/");
