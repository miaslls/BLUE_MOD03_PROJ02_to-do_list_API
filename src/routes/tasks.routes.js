'use strict';

import express from 'express';
const router = express.Router();

import { getAllTasksController } from '../controllers/tasks.controller.js';

router.get('/tasklist/all', getAllTasksController);

export default router;
