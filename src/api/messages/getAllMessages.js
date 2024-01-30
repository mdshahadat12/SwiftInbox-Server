const TempMail = require("node-temp-mail");

const getAllMessages = async (req, res, next) => {
  try {
    const email = req.query.email;

    // const resp = await fetch(
    //   `https://api.internal.temp-mail.io/api/v3/email/${email}/messages`
    // );
    // res.send(await resp.json());

    const address = new TempMail(email.split("@")[0]);

    address.fetchEmails((err, body) => {
      res.send(body);
    });
  } catch (err) {
    next(err);
  }

  // [{"id": xxxx, "from": xxxx, "to": xxx, "subject": xxxx, "body_text": xxxx, "body_html", "created_at": xxxx}]
};

module.exports = getAllMessages;
