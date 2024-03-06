const BlogModel = require("../../models/BlogModel");

const getAllBlogs = async (req, res, next) => {
  try {
    // Fetch all blogs from the database
    const blogs = await BlogModel.find();
    res.json(blogs);
  } catch (err) {
    next(err);
  }
};

module.exports = getAllBlogs;
