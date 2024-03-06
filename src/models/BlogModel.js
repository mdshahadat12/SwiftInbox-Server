const { Schema, model } = require("mongoose");

const blogSchema = new Schema({
  title: String,
  article: String,
  date: Date,
  imageUrl: String,
});

const BlogModel = model("Blog", blogSchema);

module.exports = BlogModel;
