const { Schema, model } = require("mongoose");

const paymentInfoSchema = new Schema({
    Email: String,
    Name: String,
    transactionId: String,
    date: Date,
});

const paymentInfoModel = model("paymentInfo", paymentInfoSchema);

module.exports = paymentInfoModel;
