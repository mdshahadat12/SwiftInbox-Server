const express = require("express");
const addLabel = require("../../api/label/addLabel");
const router = express.Router();

router.put("/label/:id", addLabel);

module.exports = router;
