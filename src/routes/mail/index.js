var express = require("express");
const createNewMail = require("../../api/mail/createNewMail");
const getNewMail = require("../../api/mail/getNewMail");
const getDomains = require("../../api/mail/getDomains");
const deleteMail = require("../../api/mail/deleteMail");
var router = express.Router();

router.get("/new", createNewMail);
router.get("/get-mail", getNewMail);
router.get("/get-domains", getDomains);
router.delete("/delete-mail", deleteMail);

module.exports = router;
