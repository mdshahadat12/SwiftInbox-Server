var express = require("express");
const createNewMail = require("../../api/mail/createNewMail");
var router = express.Router();

router.get("/new", createNewMail);

module.exports = router;
