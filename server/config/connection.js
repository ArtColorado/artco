const mongoose = require("mongoose");
require("dotenv").config();
console.log("-----------------------------");
console.log(process.env.MONGODB_URI);
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/artCO-DB"
);

module.exports = mongoose.connection;
