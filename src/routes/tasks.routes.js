'use strict';

import express from 'express';
const router = express.Router();

import {
  getAllTasksController,
  getTasklistController,
  getTaskByIdController,
  addTaskController,
} from '../controllers/tasks.controller.js';

router.get('/tasklist/all', getAllTasksController);
router.get('/tasklist/:tasklist', getTasklistController);
router.get('/task/:id', getTaskByIdController);
router.post('/task/add', addTaskController);

export default router;
