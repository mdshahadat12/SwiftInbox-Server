const UserModel = require("../../models/UserModel");

const getUser = async (req, res, next) => {
  try {
    const email = req.query.email;
    const user = await UserModel.findOne({ userEmail: email });
    res.status(201).send(user);
  } catch (err) {
    next(err);
  }
};

module.exports = getUser;
