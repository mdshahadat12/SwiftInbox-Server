const stripe = require("stripe")(process.env.PAYMENT_SK);

const Paymentintent = async (req, res, next) => {
  try {
    const { price } = req.body;
    const amount = parseInt(price * 100);
    console.log(amount, "amount");
    if (amount < 1) {
      return;
    }
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount,
      currency: "usd",
      payment_method_types: ["card"],
    });
    res.send(paymentIntent.client_secret);
  } catch (err) {
    next(err);
  }
};

module.exports = Paymentintent;
