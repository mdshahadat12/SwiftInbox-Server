const { Schema, model } = require("mongoose");

const tempMailSchema = new Schema({
  email: { type: String, required: true },
});

const TempMailModel = model("temp", tempMailSchema);

module.exports = TempMailModel;
