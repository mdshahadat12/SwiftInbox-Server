const createNewMail = async (req, res, next) => {
  try {
    // generating random email name
    const generateRandomName = () => {
      const randomString = Math.random()
        .toString(36)
        .substring(2, 15)
        .padEnd(13, Math.floor(Math.random() * 10).toString());
      return `${randomString}`;
    };

    const name = req.query.name || generateRandomName();
    const domain = req.query.domain || "";

    const resp = await fetch(
      "https://api.internal.temp-mail.io/api/v3/email/new",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: name, domain: domain }),
      }
    );

    console.log("hit");
    res.status(201).send(await resp.json());
  } catch (err) {
    next(err);
  }
};

module.exports = createNewMail;
