const UserModel = require("../../models/UserModel");

const getAllUsers = async (req, res, next) => {
  try {
    const result = await UserModel.find();
    res.send(result);
  } catch (err) {
    next(err);
  }
};

module.exports = getAllUsers;
