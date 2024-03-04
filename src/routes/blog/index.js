var express = require("express");
const createBlog = require("../../api/blog/createBlog");
const getAllBlogs = require("../../api/blog/getAllBlogs");
var router = express.Router();

router.get("/blog", getAllBlogs);
router.post("/blog", createBlog);

module.exports = router;
