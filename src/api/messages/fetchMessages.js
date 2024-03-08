const MessageModel = require("../../models/MessageModel");

const fetchMessages = async (req, res, next) => {
  try {
    const email = req.query.email;
    const address = email.split("@")[0];
    const domain = email.split("@")[1];
    const resp = await fetch(
      `https://www.1secmail.com/api/v1/?action=getMessages&login=${address}&domain=${domain}`
    );
    const data = await resp.json();

    const checkMessage = async (message) => {
      const exists = await MessageModel.findOne({
        id: message.id,
        created_at: message.date,
      });

      if (
        exists?.created_at === message?.date &&
        exists?.from === message?.from
      ) {
        return;
      } else {
        await MessageModel.create({
          id: message.id,
          from: message.from,
          to: email,
          subject: message.subject,
          body_text: message.textBody,
          body_html: message.htmlBody,
          created_at: message.date,
        });
      }
    };

    data.forEach(async (element) => {
      const singleMessage = await fetch(
        `https://www.1secmail.com/api/v1/?action=readMessage&login=${address}&domain=${domain}&id=${element.id}`
      );
      const obj = await singleMessage.json();
      checkMessage(obj);
    });

    const allMessages = await MessageModel.find({
      to: email,
    });

    res.send(allMessages);
  } catch (err) {
    next(err);
  }
};

module.exports = fetchMessages;
