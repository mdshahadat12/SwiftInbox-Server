const UserModel = require("../../models/UserModel");

const manageUser = async (req, res, next) => {
  try {
    const user = req.body;

    const checkUser = await UserModel.findOne({ userEmail: user.userEmail });

    if (checkUser) {
      if (checkUser.tempMail == user.tempMail) {
        res.status(400).send({
          message: "User Already Exists",
        });
      } else if (checkUser.tempMail != user.tempMail) {
        const updatedUser = await UserModel.findOneAndUpdate(
          { userEmail: user.userEmail },
          { tempMail: user.tempMail },
          { new: true }
        );
        res.status(201).send(updatedUser);
      }
    } else {
      const newUser = await UserModel.create(user);
      res.status(201).send(newUser);
    }
  } catch (err) {
    next(err);
  }
};

module.exports = manageUser;
