var express = require("express");
const addBookmark = require("../../api/bookmark/addBookmark");
const deleteBookmark = require("../../api/bookmark/deleteBookmark");
var router = express.Router();

router.put("/bookmark/:id", addBookmark);
router.delete("/bookmark/:id", deleteBookmark);

module.exports = router;
