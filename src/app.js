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
const bookmarkRoutes = require("./routes/bookmark");
const labelRoutes = require("./routes/label");
const manageRoutes = require("./routes/manage");
const reviewsRoutes = require("./routes/reviews");
const blogRoutes = require("./routes/blog");

applyMiddleware(app);

app.use(authenticationRoutes);
app.use(messagesRoutes);
app.use(mailRoutes);
app.use(usersRoutes);
app.use(bookmarkRoutes);
app.use(labelRoutes);
app.use(manageRoutes);
app.use(reviewsRoutes);
app.use(blogRoutes);

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
