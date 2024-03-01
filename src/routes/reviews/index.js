var express = require("express");
const createReview = require("../../api/reviews/createReview");
const getAllReviews = require("../../api/reviews/getAllReviews");
var router = express.Router();

router.get("/reviews", getAllReviews);
router.post("/reviews", createReview);

module.exports = router;
