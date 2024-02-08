const MessageModel = require("../../models/MessageModel");

const deleteBookmark = async (req, res, next) => {
  try {
    const { id } = req.params;
    const email = req.query.email;

    const result = await MessageModel.findByIdAndUpdate(
      { _id: id },
      { $pull: { bookmark: email } },
      { new: true }
    );

    res.status(201).send(result);
  } catch (err) {
    next(err);
  }
};

module.exports = deleteBookmark;
