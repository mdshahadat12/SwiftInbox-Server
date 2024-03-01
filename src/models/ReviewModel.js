const { Schema, model } = require("mongoose");

const reviewSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  photo: {
    type: String,
    required: true,
  },
  review: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  timeStamp: {
    type: String,
    required: true,
  },
});

const ReviewModel = model("Review", reviewSchema);

module.exports = ReviewModel;
