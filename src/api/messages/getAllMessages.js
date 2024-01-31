const MessageModel = require("../../models/MessageModel");

const getAllMessages = async (req, res, next) => {
  try {
    const email = req.query.email;

    const resp = await fetch(
      `https://api.internal.temp-mail.io/api/v3/email/${email}/messages`
    );

    // checking mongodb for duplicate messages

    const checkMessage = async (message) => {
      const exists = await MessageModel.findOne({
        id: message.id,
      });

      if (exists) {
        return;
      } else {
        await MessageModel.create({
          id: message.id,
          from: message.from,
          to: message.to,
          cc: message.cc,
          subject: message.subject,
          body_text: message.body_text,
          body_html: message.body_html,
          created_at: message.created_at,
          attachments: message.attachments,
        });
      }
    };

    const messageArray = await resp.json();

    if (messageArray.length > 0) {
      await messageArray?.map(async (message) => {
        checkMessage(message);
      });

      const messages = await MessageModel.find({
        to: email,
      });
      

      res.send(messages);
    }

    // const address = new TempMail(email.split("@")[0]);

    // address.fetchEmails((err, body) => {
    //   res.send(body);
    //   console.log(body);
    // });
  } catch (err) {
    next(err);
  }

  // [{"id": xxxx, "from": xxxx, "to": xxx, "subject": xxxx, "body_text": xxxx, "body_html", "created_at": xxxx}]
};

module.exports = getAllMessages;
