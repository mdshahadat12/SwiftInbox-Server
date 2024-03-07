var express = require("express");
const createBlog = require("../../api/blog/createBlog");
const getSingleBlog = require("../../api/blog/getSingleBlog");
const getAllBlogs = require("../../api/blog/getAllBlogs");
var router = express.Router();

router.get("/blog", getAllBlogs);
router.get("/blog/:id", getSingleBlog);
router.post("/blog", createBlog);

module.exports = router;
