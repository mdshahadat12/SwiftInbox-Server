const paymentInfoModel = require("../../models/paymentInfo");

const SaveInfo = async (req, res , next) => {
    try{
    const info = req.body;
    console.log(info);
    const result = await paymentInfoModel.create(info);
    console.log(result);
    res.status(201).send(result);
    } catch (err) {
        next(err);
      }
  };

  module.exports = SaveInfo;