const MessageModel = require("../../models/MessageModel");

const addBookmark = async (req, res, next) => {
  try {
    const { id } = req.params;
    const email = req.query.email;

    const result = await MessageModel.findByIdAndUpdate(
      { _id: id },
      { $push: { bookmark: email } },
      { new: true }
    );
    res.status(201).send(result);
  } catch (err) {
    next(err);
  }
};

module.exports = addBookmark;
