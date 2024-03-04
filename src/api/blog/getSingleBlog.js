const BlogModel = require("../../models/BlogModel");

const getSingleBlog = async (req, res, next) => {
  try {
    const id = req.params.id;
    const result = await BlogModel.findOne({ _id: id });
    res.send(result);
  } catch (err) {
    next(err);
  }
};
module.exports = getSingleBlog;
