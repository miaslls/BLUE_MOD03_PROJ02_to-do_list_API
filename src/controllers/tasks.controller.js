'use strict';

const {
  getAllTasksService,
  getTasklistService,
  getTaskByIdService,
  addTaskService,
  updateTaskService,
  deleteTaskService,
} = require('../services/tasks.service.js');

// 📌 ----- GET all tasks

const getAllTasksController = async (req, res) => {
  const allTasks = await getAllTasksService();

  if (allTasks.length === 0) {
    res.status(204);
  } else {
    res.status(200).send({ allTasks });
  }
};

// 📌 ----- GET tasklist

const getTasklistController = async (req, res) => {
  const tasklistParam = req.params.tasklist;
  const chosenTasklist = await getTasklistService(tasklistParam);

  if (chosenTasklist.length === 0) {
    res.status(204);
  } else {
    res.send({ tasklist: tasklistParam, data: chosenTasklist });
  }
};

// 📌 ----- GET task by ID

const getTaskByIdController = async (req, res) => {
  const idParam = req.params.id;

  const chosenTask = await getTaskByIdService(idParam);

  if (!chosenTask) {
    return res.status(404);
  }

  res.status(200).send({ data: chosenTask });
};

// 📌 ----- PUT add task

const addTaskController = async (req, res) => {
  const taskBody = req.body;
  const newTask = await addTaskService(taskBody);

  res.status(201).send({ message: 'added', data: newTask });
};

// 📌 ----- POST update task

const updateTaskController = async (req, res) => {
  const idParam = req.params.id;
  const taskBody = req.body;

  const taskToBeUpdated = await getTaskByIdService(idParam);

  if (!taskToBeUpdated) {
    return res.status(404);
  }

  const updatedTask = await updateTaskService(idParam, taskBody);

  res.status(200).send({ message: 'updated', data: updatedTask });
};

// 📌 ----- DELETE task

const deleteTaskController = async (req, res) => {
  const idParam = req.params.id;

  const taskToBeDeleted = await getTaskByIdService(idParam);

  if (!taskToBeDeleted) {
    return res.status(404);
  }

  await deleteTaskService(idParam);

  res.status(204);
};

// 📌 ----- PUT toggle starred/completed

const toggleTaskOptionController = async (req, res) => {
  const idParam = req.params.id;
  const optionParam = req.params.option;

  const taskToUpdateOption = await getTaskByIdService(idParam);

  if (!taskToUpdateOption) {
    return res.status(404);
  }

  taskToUpdateOption[optionParam] = !taskToUpdateOption[optionParam]; // toggle boolean

  const updatedTaskOption = await updateTaskService(idParam, taskToUpdateOption);

  res.status(200).send({ data: updatedTaskOption });
};

module.exports = {
  getAllTasksController,
  getTasklistController,
  getTaskByIdController,
  addTaskController,
  updateTaskController,
  deleteTaskController,
  toggleTaskOptionController,
};
