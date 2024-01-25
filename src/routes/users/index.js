var express = require("express");
const manageUsers = require("../../api/users/manageUsers");
var router = express.Router();

router.post("/user", manageUsers);

module.exports = router;
