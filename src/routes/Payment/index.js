var express = require("express");
const PaymentIntent = require("../../api/Payment/PaymentIntent");
var router = express.Router();
router.post("/paymentIntent", PaymentIntent);
module.exports = router;
