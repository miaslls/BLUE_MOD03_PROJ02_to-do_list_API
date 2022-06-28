'use strict';

import express from 'express';
const router = express.Router();

import { getAllTasksController, getTasklistController } from '../controllers/tasks.controller.js';

router.get('/tasklist/all', getAllTasksController);
router.get('/tasklist/:tasklist', getTasklistController);

export default router;
