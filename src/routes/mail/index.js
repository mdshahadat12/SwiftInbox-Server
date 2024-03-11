var express = require("express");
const createNewMail = require("../../api/mail/createNewMail");
const getNewMail = require("../../api/mail/getNewMail");
const getDomains = require("../../api/mail/getDomains");
const updateMail = require("../../api/mail/updateMail");
const notifyMail = require("../../api/mail/notifyMail");
const getDomainList = require("../../api/1secmail/getDomainList");
const createMail = require("../../api/1secmail/createMail");
var router = express.Router();

// router.get("/new", createNewMail); //temp-mail.io
router.get("/new", createMail); //for 1secmail only

// router.get("/get-domains", getDomains); //temp-mail.io
router.get("/get-domains", getDomainList); //for 1secmail only
router.put("/update-mail/:id", updateMail);
router.put("/notify-mail/:id", notifyMail);

module.exports = router;
