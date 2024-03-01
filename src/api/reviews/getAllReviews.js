const ReviewModel = require("../../models/ReviewModel");

const getAllReviews = async (req, res, next) => {
  try {
    const result = await ReviewModel.find();
    res.status(200).send(result);
  } catch (err) {
    next(err);
  }
};

module.exports = getAllReviews;
