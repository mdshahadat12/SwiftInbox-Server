const { Schema, model } = require("mongoose");

const messageSchema = new Schema({
  id: {
    type: String,
    required: true,
  },
  from: {
    type: String,
    required: true,
  },
  to: {
    type: String,
    required: true,
  },
  cc: {
    type: String,
    default: null,
  },
  subject: {
    type: String,
    // required: true,
  },
  body_text: {
    type: String,
    required: true,
  },
  body_html: {
    type: String,
    required: true,
  },
  created_at: {
    type: String,
    required: true,
  },
  attachments: {
    type: Array,
    default: [],
  },
});

const MessageModel = model("message", messageSchema);

module.exports = MessageModel;
