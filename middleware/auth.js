const jwt = require("jsonwebtoken");
require("dotenv").config();

function auth(req, res, next) {
  const token = req.header("x-auth-token");
  if (!token) res.status(401).send("Access denied. No token provided.");
  try {
    const decoded = jwt.verify(token, process.env.JWTPRIVATEKEY);
    if (decoded.message === "authenticated") {
      next();
    }
  } catch (ex) {
    res.status(400).send("Invalid token.");
  }
}

module.exports = auth;
