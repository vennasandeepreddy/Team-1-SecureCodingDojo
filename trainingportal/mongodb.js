const mongoose = require("mongoose");
const path = require('path');
const util = require(path.join(__dirname, 'util'));
var dburi = util.getMongoURI();

const config = {
  useNewUrlParser: true,
  useUnifiedTopology: true
};
mongoose.connect(dburi.mongouri, config, () => {
  console.log("connecting to mongo db");
});

const db = mongoose.connection;

db.on('connected', () => {
  console.log('Mongoose is connected!');
});

db.on('error', () => {
  console.log('Connection Error!');
});