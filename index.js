'use strict';

import express from 'express';
import cors from 'cors';
import routes from './src/routes/tasks.routes.js';
import databaseConnection from './src/database/dbConnection.js';

const app = express();
const port = 3000;

databaseConnection();

app.use(express.json());
app.use(cors());
app.use('/', routes);

app.listen(port, () => {
  console.log(`server running @ http://localhost:${port} 🔗`);
});
