var express = require("express");
const manageUser = require("../../api/users/manageUser");
const verifyToken = require("../../middlewares/verifyToken");
const getUser = require("../../api/users/getUser");
const getAllUsers = require("../../api/users/getAllUsers");
const updateRole = require("../../api/users/updateRole");
const updateProfile = require("../../api/users/updateProfile");
var router = express.Router();

router.get("/all-users", getAllUsers);
router.get("/get-user", getUser);
router.post("/manage-user", manageUser);
router.put("/change-role", updateRole);
router.put("/update-profile", updateProfile);

module.exports = router;
