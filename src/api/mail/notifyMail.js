const MessageModel = require("../../models/MessageModel");

const notifyMail = async (req, res, next) => {
  try {
    const id = req.params.id;

    const result = await MessageModel.findOneAndUpdate(
      { _id: id },
      { status: "read" }
    );
    res.status(201).send(result);
  } catch (err) {
    next(err);
  }
};

module.exports = notifyMail;
