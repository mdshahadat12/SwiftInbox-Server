const getDomains = async (req, res, next) => {
  try {
    const domains = await fetch(
      "https://api.internal.temp-mail.io/api/v4/domains"
    );
    res.status(200).send(await domains.json());
  } catch (err) {
    next(err);
  }
};

module.exports = getDomains;
