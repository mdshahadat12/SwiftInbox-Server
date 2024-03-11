var express = require("express");
const PaymentIntent = require("../../api/Payment/PaymentIntent");
const SaveInfo = require("../../api/Payment/SaveInfo");
var router = express.Router();
router.post("/paymentIntent", PaymentIntent);
router.post("/saveInfo", SaveInfo);
module.exports = router;
