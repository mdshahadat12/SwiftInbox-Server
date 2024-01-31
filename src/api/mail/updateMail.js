const MessageModel = require("../../models/MessageModel");

const updateMail = async (req, res, next) => {
  try {
    const id = req.params.id;

    // const status = req.body;

    const result = await MessageModel.findOneAndUpdate(
      { _id: id },
      { status: "deleted" }
    );
    res.status(201).send(result);
  } catch (err) {
    next(err);
  }
};

module.exports = updateMail;
