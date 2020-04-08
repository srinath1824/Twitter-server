const express = require("express");
const authMiddleware = require("../middleware/auth");
const router = express.Router();
require("dotenv").config();

//image urls
//https://picsum.photos/v2/list?page=2&limit=100

const tweets = [
  {
    postedBy: "Srinath",
    posted: "3 April",
    message:
      "Thanks Folded hands everyone who tuned in to catch @RyanTedder of @OneRepublic show his support for small businesses on #PayItForwardLIVE. ICYMI here’s what happened!",
    videoURL: "",
    imageURL: "https://i.picsum.photos/id/203/4032/3024.jpg",
    comments: [],
    commentsCount: 12,
    reTweets: [],
    reTweetsCount: 59,
    like: [],
    LikesCount: 168,
  },
  {
    postedBy: "Verizon",
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
  {
    postedBy: "Sri2321",
    posted: "3 April",
    message:
      "Thanks Folded hands everyone who tuned in to catch @RyanTedder of @OneRepublic show his support for small businesses on #PayItForwardLIVE. ICYMI here’s what happened!",
    videoURL: "",
    imageURL: "https://i.picsum.photos/id/12/2500/1667.jpg",
    comments: [],
    commentsCount: 12,
    reTweets: [],
    reTweetsCount: 59,
    like: [],
    LikesCount: 168,
  },
];

router.post("/tweets", authMiddleware, (req, res) => {
  res.status(200).send(tweets);
});

module.exports = router;
