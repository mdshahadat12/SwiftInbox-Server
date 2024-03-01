var express = require("express");
const getAllMessages = require("../../api/messages/getAllMessages");
const getSingleMessage = require("../../api/messages/getSingleMessage");
const allMessages = require("../../api/messages/allMessages");
var router = express.Router();

router.get("/all-messages", allMessages);
router.get("/messages", getAllMessages);
router.get("/message/:id", getSingleMessage);

module.exports = router;
