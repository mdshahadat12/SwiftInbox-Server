const MessageModel = require("../../models/MessageModel");
const getSingleMessage = async (req, res) => {
  const id = req.params.id;
      console.log(id);
      const result = await MessageModel.findOne({_id:id});
      res.send(result);
};
module.exports = getSingleMessage;
