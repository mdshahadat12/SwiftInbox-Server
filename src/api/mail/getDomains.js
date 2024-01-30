const getDomains = async (req, res, next) => {
  try {
    const domains = await fetch(
      "https://api.internal.temp-mail.io/api/v4/domains"
    );
    const customDomains = await domains.json();
    res.status(200).send(customDomains.domains);
  } catch (err) {
    next(err);
  }
};

module.exports = getDomains;
