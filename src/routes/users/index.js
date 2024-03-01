var express = require("express");
const manageUser = require("../../api/users/manageUser");
const verifyToken = require("../../middlewares/verifyToken");
const getUser = require("../../api/users/getUser");
const getAllUsers = require("../../api/users/getAllUsers");
var router = express.Router();

router.get("/all-users", getAllUsers);
router.get("/get-user", getUser);
router.post("/manage-user", manageUser);

module.exports = router;
