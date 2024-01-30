var express = require("express");
const createNewMail = require("../../api/mail/createNewMail");
const getNewMail = require("../../api/mail/getNewMail");
var router = express.Router();

router.get("/new", createNewMail);
router.get("/get-mail", getNewMail);

module.exports = router;
