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
});

const UserModel = model("User", userSchema);

module.exports = UserModel;
