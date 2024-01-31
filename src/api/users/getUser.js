const getUser = async (req, res, next) => {
  try {
    email = req.query.email;
    console.log(email);
    const user = await UserModel.findOne({ userEmail: email });
    res.status(201).send(user);
  } catch (err) {
    next(err);
  }
};

module.exports = getUser;
