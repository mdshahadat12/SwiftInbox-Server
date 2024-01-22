var express = require("express");
const getAllMessages = require("../../api/messages/getAllMessages");
const getSingleMessage = require("../../api/messages/getSingleMessage");
var router = express.Router();

router.get("/messages", getAllMessages);
router.get("/message/:id", getSingleMessage);

module.exports = router;
