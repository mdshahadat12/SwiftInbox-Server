const TempMail = require("node-temp-mail");
const TempMailModel = require("../../models/TempMailModel");

const getNewMail = async (req, res, next) => {
  // generating random email name
  const generateRandomEmail = () => {
    const randomString = Math.random()
      .toString(36)
      .substring(2, 15)
      .padEnd(13, Math.floor(Math.random() * 10).toString());
    return `${randomString}`;
  };

  //   checking the mail is already exists or not
  const checkTempMail = async () => {
    try {
      const tempMail = generateRandomEmail();
      const exists = await TempMailModel.findOne({
        email: tempMail,
      });

      if (exists) {
        return await checkTempMail();
      } else {
        return tempMail;
      }
    } catch (err) {
      throw err;
    }
  };
  try {
    const customMail = req.query.customMail || null;

    if (customMail) {
      const address = new TempMail(customMail);
      const email = await address.getAddress().address;

      const exists = await TempMailModel.findOne({
        email: email,
      });

      //   checking if the custom mail exists or not
      if (exists) {
        res.status(200).send({ message: "Email Already Taken" });
      } else {
        await TempMailModel.create({
          email: email,
        });
        res.status(201).send({ email });
      }
    } else {
      const address = new TempMail(await checkTempMail());
      const email = await address.getAddress().address;
      await TempMailModel.create({
        email: email,
      });

      res.status(201).send({ email });
    }
  } catch (err) {
    next(err);
  }
};

module.exports = getNewMail;
