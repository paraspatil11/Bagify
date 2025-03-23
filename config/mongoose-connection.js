const mongoose = require('mongoose');
const config = require('config');
const dbgr = require('debug')('development:mongoose-connection');

mongoose.connect(`${config.get('MONGODB_URI')}/bagify`)
  .then(() => dbgr("Connected to MongoDB"))
  .catch(err => dbgr("Could not connect to MongoDB:", err));

module.exports = mongoose.connection;