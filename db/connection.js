const config = require("./config");
const mongoose = require("mongoose");

mongoose.connect(config.dbURL);

module.exports = mongoose;