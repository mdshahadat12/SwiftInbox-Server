const getDomainList = async (req, res, next) => {
  try {
    const domains = await fetch(
      "https://www.1secmail.com/api/v1/?action=getDomainList"
    );
    const customDomains = await domains.json();

    res.status(200).send(customDomains);
  } catch (err) {
    next(err);
  }
};

module.exports = getDomainList;
