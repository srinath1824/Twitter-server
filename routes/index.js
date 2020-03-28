const express = require("express");
const router = express.Router();
require("dotenv").config();

router.get("/", (req, res) => {
  res.status(200).send({
    message: "Posts"
  });
});

module.exports = router;
