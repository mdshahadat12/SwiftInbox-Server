const MessageModel = require("../../models/MessageModel");

const allMessages = async (req, res, next) => {
  try {
    const result = await MessageModel.find();
    res.send(result);
  } catch (err) {
    next(err);
  }
};

module.exports = allMessages;
