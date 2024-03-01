var express = require("express");
const createNewMail = require("../../api/mail/createNewMail");
const getNewMail = require("../../api/mail/getNewMail");
const getDomains = require("../../api/mail/getDomains");
const updateMail = require("../../api/mail/updateMail");
const notifyMail = require("../../api/mail/notifyMail");
var router = express.Router();

router.get("/new", createNewMail);
router.get("/get-mail", getNewMail);
router.get("/get-domains", getDomains);
router.put("/update-mail/:id", updateMail);
router.put("/notify-mail/:id", notifyMail);

module.exports = router;
