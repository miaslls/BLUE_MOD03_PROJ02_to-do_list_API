'use strict';

import mongoose from 'mongoose';

const databaseConnection = () => {
  mongoose
    .connect('mongodb://localhost:27017/miatasks', {
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

export default databaseConnection;
