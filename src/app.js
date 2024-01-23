const express = require("express");
const applyMiddleware = require("./middlewares/applyMiddleware");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;

// routes
const authenticationRoutes = require("./routes/authentication");
const messagesRoutes = require("./routes/messages");
const mailRoutes = require("./routes/mail");
const usersRoutes = require("./routes/users");

applyMiddleware(app);

app.use(authenticationRoutes);
app.use(messagesRoutes);
app.use(mailRoutes);
app.use(usersRoutes);

app.get("/", (req, res) => {
  res.send("SwiftInbox Server Is Running");
});

app.all("*", (req, res, next) => {
  const err = new Error(`The Requested URL [${req.url}] Is Invalid`);
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    message: err.message,
  });
});

module.exports = app;
