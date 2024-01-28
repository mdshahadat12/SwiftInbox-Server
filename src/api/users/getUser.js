const getUser = async (req, res, next) => {
  try {
    email = req.query.email || null;
    if (email) {
      const user = await UserModel.findOne({ userEmail: email });
      if (user) {
        res.status(201).send(user);
      } else {
        res.status(400).send({ message: "User does not exist" });
      }
    }
  } catch (err) {
    next(err);
  }
};

module.exports = getUser;
