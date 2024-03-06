const BlogModel = require("../../models/BlogModel");

const createBlog = async (req, res, next) => {
  try {
    const blog = req.body;
    const result = await BlogModel.create(blog);
    res.status(201).send(result);
  } catch (err) {
    next(err);
  }
};

module.exports = createBlog;
