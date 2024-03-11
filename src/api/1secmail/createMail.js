const createMail = async (req, res, next) => {
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
    const domain = req.query.domain || "1secmail.com";

    const email = `${name}@${domain}`;

    res.status(201).send({ email: email });
  } catch (err) {
    next(err);
  }
};

module.exports = createMail;
