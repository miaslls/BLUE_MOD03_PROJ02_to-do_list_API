'use strict';

const express = require('express');
const router = express.Router();

const {
  getAllTasksController,
  getTasklistController,
  getTaskByIdController,
  addTaskController,
  updateTaskController,
  deleteTaskController,
  toggleTaskOptionController,
} = require('../controllers/tasks.controller');

const { validId, validObjectBody } = require('../middleware/tasks.middleware');

router.get('/', getAllTasksController);
router.get('/:tasklist', getTasklistController);
router.get('/:id', validId, getTaskByIdController);
router.post('/', validObjectBody, addTaskController);
router.put('/:id', validId, validObjectBody, updateTaskController);
router.delete('/:id', validId, deleteTaskController);
router.put('/:option/:id', validId, toggleTaskOptionController);

module.exports = router;
