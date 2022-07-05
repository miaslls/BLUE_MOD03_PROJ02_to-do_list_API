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
  toggleTaskOptionController,
} from '../controllers/tasks.controller.js';

import { validId, validObjectBody } from '../middleware/tasks.middleware.js';

router.get('/tasklist/all', getAllTasksController);
router.get('/tasklist/:tasklist', getTasklistController);
router.get('/task/:id', validId, getTaskByIdController);
router.post('/task/add', validObjectBody, addTaskController);
router.put('/task/update/:id', validId, validObjectBody, updateTaskController);
router.delete('/task/delete/:id', validId, deleteTaskController);
router.put('/task/:option/:id', validId, toggleTaskOptionController);

export default router;
