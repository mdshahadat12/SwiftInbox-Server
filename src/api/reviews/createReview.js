const ReviewModel = require("../../models/ReviewModel");

const createReview = async (req, res, next) => {
  try {
    const review = req.body;
    const result = await ReviewModel.create(review);
    res.status(201).send(result);
  } catch (err) {
    next(err);
  }
};

module.exports = createReview;
