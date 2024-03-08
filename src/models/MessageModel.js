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
    default: "",
  },
  subject: {
    type: String,
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
  status: {
    type: String,
    default: "unread",
  },
  bookmark: {
    type: Array,
    default: [],
  },
  label: {
    type: String,
    default: "",
  },
});

const MessageModel = model("message", messageSchema);

module.exports = MessageModel;
