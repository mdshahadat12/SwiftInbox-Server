const { Schema, model } = require("mongoose");

const emailSchema = new Schema({
  to: String,
  subject: String,
  text: String,
  timeStamp: String,
});

const Email = model("Email", emailSchema);

module.exports = Email;
