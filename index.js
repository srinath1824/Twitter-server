const config = require("config");
const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const auth = require("./auth");
const posts = require("./routes");
const authMiddleware = require("./middleware/auth");
const app = express();
require("dotenv").config();

if (!config.get("jwtprivatekey")) {
  console.error("FATAL ERROR: jwtprivatekey is not defined");
  process.exit(1); //0 indicates success
}

//PORT
let port = process.env.PORT || 5000;

//Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(helmet());

//Configuration
console.log("Application Name: ", config.get("name"));
console.log("Mail server: ", config.get("mail.host"));

if (app.get("env") === "development") {
  //log http requests
  app.use(morgan("tiny"));
  console.log("Morgan enabled");
}

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use("/api/auth", auth);
app.use(authMiddleware);
app.use("/api/posts", posts);

app.listen(port, () => {
  console.log(`listining to port ${port}`);
});
