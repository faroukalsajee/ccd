let express = require("express");
let path = require("path");
let request = require("request");

const apiUrl = "https://od-do.agr.gc.ca/canadianCheeseDirectory.json";

let app = express();
app.use(express.urlencoded({ extended: true }));

const port = 8085;

app.get("/", function (_req, res) {
  res.sendFile(path.join(__dirname, "/index.html"));
});

app.post("/", function (_req, res) {
  request.get({ url: apiUrl }, function (_error, _response, body) {
    res.send(body);
  });
});
app.use("/static", express.static("static"));
app.listen(port);

console.log(`Your server is running on port: ${port}`);
console.log(`http://localhost:${port}/`);
