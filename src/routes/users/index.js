var express = require("express");
const manageUser = require("../../api/users/manageUser");
const verifyToken = require("../../middlewares/verifyToken");
const getUser = require("../../api/users/getUser");
var router = express.Router();

router.get("/get-user",getUser);
router.post("/manage-user", verifyToken, manageUser);

module.exports = router;
