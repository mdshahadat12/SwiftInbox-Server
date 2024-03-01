var express = require("express");
const createReview = require("../../api/reviews/createReview");
var router = express.Router();

router.get("/reviews");
router.post("/reviews", createReview);

module.exports = router;
