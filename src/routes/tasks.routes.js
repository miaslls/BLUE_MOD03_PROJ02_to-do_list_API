'use strict';

import express from 'express';
const router = express.Router();

import {
  getAllTasksController,
  getTasklistController,
  getTaskByIdController,
  addTaskController,
  updateTaskController,
  deleteTaskController,
} from '../controllers/tasks.controller.js';

router.get('/tasklist/all', getAllTasksController);
router.get('/tasklist/:tasklist', getTasklistController);
router.get('/task/:id', getTaskByIdController);
router.post('/task/add', addTaskController);
router.put('/task/update/:id', updateTaskController);
router.delete('/task/delete/:id', deleteTaskController);

export default router;
