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

router.get('/', getAllTasksController);
router.get('/:tasklist', getTasklistController);
router.get('/:id', validId, getTaskByIdController);
router.post('/', validObjectBody, addTaskController);
router.put('/:id', validId, validObjectBody, updateTaskController);
router.delete('/:id', validId, deleteTaskController);
router.put('/:option/:id', validId, toggleTaskOptionController);

export default router;
