const UserModel = require("../../models/UserModel");

const updateRole = async (req, res, next) => {
  try {
    const email = req.body.email;
    const role = req.body.role;

    const result = await UserModel.findOneAndUpdate(
      { userEmail: email },
      { role: role }
    );

    res.status(201).send(result);
  } catch (err) {
    next(err);
  }
};

module.exports = updateRole;
