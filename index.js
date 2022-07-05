'use strict';

const express = require('express');
const cors = require('cors');
const taskRoutes = require('./src/routes/tasks.routes.js');
const swaggerRoutes = require('./src/routes/swagger.routes.js');
const databaseConnection = require('./src/database/dbConnection.js');

const app = express();
const port = 3000;

databaseConnection();

app.use(express.json());
app.use(cors());
app.use('/tasks', taskRoutes);
app.use('/api', swaggerRoutes);

app.listen(port, () => {
  console.log(`server running @ http://localhost:${port} 🔗`);
});
