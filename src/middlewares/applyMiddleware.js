const cors = require("cors");
const cookieParser = require("cookie-parser");
const express = require("express");
const { LOCAL_CLIENT, CLIENT } = require("../config/default");

const applyMiddleware = (app) => {
  app.use(express.json());
  app.use(
    cors({
      origin: [LOCAL_CLIENT, CLIENT],
      // origin: ["http://localhost:5173", "https://swiftinbox.netlify.app"],
      credentials: true,
    })
  );
  app.use(cookieParser());
  // console.log(LOCAL_CLIENT, CLIENT);
};

module.exports = applyMiddleware;
