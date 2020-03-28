const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
require("dotenv").config();

router.post("/", (req, res) => {
  if (req.body.username === "asd" && req.body.password === "asd") {
    const token = jwt.sign(
      { message: "authenticated" },
      process.env.JWTPRIVATEKEY
    );
    res.header("x-auth-token", token);
    res.status(200).send({
      message: "Logged in successfully",
      "x-auth-token": token
    });
  } else {
    res.status(400).send({
      message: "Incorrect username or password"
    });
  }
});

module.exports = router;
