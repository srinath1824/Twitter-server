const express = require("express");
const router = express.Router();
require("dotenv").config();

const tweets = [
  {
    posted: "3 April",
    message:
      "Thanks Folded hands everyone who tuned in to catch @RyanTedder of @OneRepublic show his support for small businesses on #PayItForwardLIVE. ICYMI here’s what happened!",
    videoURL: "https://media.w3.org/2010/05/sintel/trailer_hd.mp4",
    imageURL: "",
    comments: [],
    commentsCount: 12,
    reTweets: [],
    reTweetsCount: 59,
    like: [],
    LikesCount: 168,
  },
];

router.get("/tweets", (req, res) => {
  res.status(200).send(tweets);
});

module.exports = router;
