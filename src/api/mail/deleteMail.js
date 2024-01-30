const MessageModel = require("../../models/MessageModel");

const deleteMail = async (req, res, next) => {
  try {
    const id = req.params.id;
    const result = await MessageModel.deleteOne({
      _id: id,
    });
    res.status(201).send(result);
  } catch (err) {
    next(err);
  }
};

module.exports = deleteMail;
