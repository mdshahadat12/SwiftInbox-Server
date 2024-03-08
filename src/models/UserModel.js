const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  userEmail: {
    type: String,
    required: true,
  },
  displayName: {
    type: String,
  },
  tempMail: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
    default: "user",
  },
  address: {
    type: String,
    default: "N/A",
  },
  country: {
    type: String,
    default: "N/A",
  },
  dateOfBirth: {
    type: String,
    default: "N/A",
  },
  phoneNumber: {
    type: String,
    default: "N/A",
  },
});

const UserModel = model("User", userSchema);

module.exports = UserModel;
