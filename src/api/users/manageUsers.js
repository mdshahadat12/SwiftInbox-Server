const UserModel = require("../../models/UserModel");

const manageUsers = async (req, res, next) => {
  const user = req.body;
  const checkUser = await UserModel.findOne({ userEmail: user.userEmail });

  if (checkUser) {
    if (checkUser.tempMail == user.tempMail) {
      res.status(400).json({
        message: "User Already Exists",
      });
      return;
    }
    const updatedUser = await UserModel.findOneAndUpdate(
      { userEmail: user.userEmail },
      { tempMail: user.tempMail },
      { new: true }
    );

    res.status(201).json(updatedUser);
    return;
  }
  const newUser = await UserModel.create(user);

  res.status(201).json(newUser);
};

module.exports = manageUsers;
