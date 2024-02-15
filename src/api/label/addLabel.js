const MessageModel = require("../../models/MessageModel");

const addLabel = async (req, res, next) => {
  try {
    const { label } = req.query;
    const { messageId } = req.params;
    const newLabel = await MessageModel.findByIdAndUpdate(
      { _id: messageId },
      { label: label },
      { new: true }
    );
    res.status(201).json({
      message: "Label created successfully",
      label: newLabel,
    });
  } catch (err) {
    next(err);
  }
};

module.exports = addLabel;
