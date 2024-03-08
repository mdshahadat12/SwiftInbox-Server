var express = require("express");
const getAllMessages = require("../../api/messages/getAllMessages");
const getSingleMessage = require("../../api/messages/getSingleMessage");
const allMessages = require("../../api/messages/allMessages");
const fetchMessages = require("../../api/messages/fetchMessages");
var router = express.Router();

router.get("/all-messages", allMessages);
// router.get("/messages", getAllMessages);
router.get("/messages", fetchMessages);
router.get("/message/:id", getSingleMessage);

module.exports = router;
