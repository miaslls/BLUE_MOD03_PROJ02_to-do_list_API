'use strict';

const mongoose = require('mongoose');

const databaseConnection = () => {
  mongoose
    .connect('mongodb://localhost:27017/miatasks-db', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log('MONGO DB CONNECTED ❤');
    })
    .catch((err) => {
      return console.log(`error connecting database: ${err}`);
    });
};

module.exports = databaseConnection;
