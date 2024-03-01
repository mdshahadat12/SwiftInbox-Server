const MessageModel = require("../../models/MessageModel");

const getSingleMessage = async (req, res, next) => {
  try {
    const id = req.params.id;
    const result = await MessageModel.findOne({ _id: id });
    res.send(result);
  } catch (err) {
    next(err);
  }
};
module.exports = getSingleMessage;
