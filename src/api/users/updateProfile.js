const UserModel = require("../../models/UserModel");

const updateProfile = async (req, res, next) => {
  try {
    const { email, phoneNumber, dateOfBirth, address, country } = req.body;

    const result = await UserModel.findOneAndUpdate(
      { userEmail: email },
      {
        phoneNumber: phoneNumber,
        dateOfBirth: dateOfBirth,
        address: address,
        country: country,
      },
      { new: true }
    );

    console.log(result);
    res.status(201).send(result);
  } catch (err) {
    next(err);
  }
};

module.exports = updateProfile;
