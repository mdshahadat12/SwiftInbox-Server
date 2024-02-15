const MessageModel = require("../../models/MessageModel");

const addLabel = async (req, res, next) => {
  try {
    const labelName = req.query.label;
    const messageId = req.params.id;
    const result = await MessageModel.findByIdAndUpdate(
      { _id: messageId },
      { label: labelName },
      { new: true }
    );
    res.status(201).send(result);
  } catch (err) {
    next(err);
  }
};

module.exports = addLabel;
