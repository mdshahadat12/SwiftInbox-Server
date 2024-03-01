var express = require("express");
const updateRole = require("../../api/manage/updateRole");
var router = express.Router();

router.put("/change-role", updateRole);

module.exports = router;
