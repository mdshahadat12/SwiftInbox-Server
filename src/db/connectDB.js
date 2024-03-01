const mongoose = require("mongoose");
require("dotenv").config();

const getConnectString = () => {
  let connectionURI;

  if (process.env.NODE_ENV == "development") {
    connectionURI = process.env.DB_LOCAL;
    connectionURI = connectionURI.replace(
      "<username>",
      process.env.DB_LOCAL_USER
    );
    connectionURI = connectionURI.replace(
      "<password>",
      process.env.DB_LOCAL_PASS
    );
  } else {
    connectionURI = process.env.DB_PROD;
  }

  return connectionURI;
};

const connectDB = async () => {
  try {
    const uri = getConnectString();
    await mongoose.connect(uri, {
      dbName: process.env.DB_NAME,
    });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("MongoDB connection error:", error.message);
    throw error;
  }
};

module.exports = connectDB;
