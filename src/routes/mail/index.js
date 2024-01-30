var express = require("express");
const createNewMail = require("../../api/mail/createNewMail");
const getNewMail = require("../../api/mail/getNewMail");
const getDomains = require("../../api/mail/getDomains");
var router = express.Router();

router.get("/new", createNewMail);
router.get("/get-mail", getNewMail);
router.get("/get-domains", getDomains);

module.exports = router;
