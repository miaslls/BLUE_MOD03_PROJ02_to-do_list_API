'use strict';

import {
  getAllTasksService,
  getTasklistService,
  getTaskByIdService,
  addTaskService,
  updateTaskService,
  deleteTaskService,
} from '../services/tasks.service.js';

// 📌 ----- GET all tasks

export const getAllTasksController = async (req, res) => {
  const allTasks = await getAllTasksService();

  if (allTasks.length === 0) {
    res.status(206).send({ message: 'no tasks' });
  } else {
    res.send({ data: allTasks });
  }
};

// 📌 ----- GET tasklist

export const getTasklistController = async (req, res) => {
  const tasklistParam = req.params.tasklist;
  const chosenTasklist = await getTasklistService(tasklistParam);

  if (chosenTasklist.length === 0) {
    res.status(206).send({ message: 'tasklist empty' });
  } else {
    res.send({ tasklist: tasklistParam, data: chosenTasklist });
  }
};

// 📌 ----- GET task by ID

export const getTaskByIdController = async (req, res) => {
  const idParam = req.params.id;

  const chosenTask = await getTaskByIdService(idParam);

  if (!chosenTask) {
    return res.status(404).send({ message: 'task not found' });
  }

  res.status(200).send({ data: chosenTask });
};

// 📌 ----- PUT add task

export const addTaskController = async (req, res) => {
  const taskBody = req.body;
  const newTask = await addTaskService(taskBody);

  res.status(201).send({ message: 'added', data: newTask });
};

// 📌 ----- POST update task

export const updateTaskController = async (req, res) => {
  const idParam = req.params.id;
  const taskBody = req.body;

  const taskToBeUpdated = await getTaskByIdService(idParam);

  if (!taskToBeUpdated) {
    return res.status(404).send({ message: 'task not found' });
  }

  const updatedTask = await updateTaskService(idParam, taskBody);

  res.status(200).send({ message: 'updated', data: updatedTask });
};

// 📌 ----- DELETE task

export const deleteTaskController = async (req, res) => {
  const idParam = req.params.id;

  const taskToBeDeleted = await getTaskByIdService(idParam);

  if (!taskToBeDeleted) {
    return res.status(404).send({ message: 'task not found' });
  }

  const deletedTask = await deleteTaskService(idParam);

  res.status(200).send({ message: 'deleted', data: deletedTask });
};

// 📌 ----- PUT toggle starred/completed

export const toggleTaskOptionController = async (req, res) => {
  const idParam = req.params.id;
  const optionParam = req.params.option;

  const taskToUpdateOption = await getTaskByIdService(idParam);

  if (!taskToUpdateOption) {
    return res.status(404).send({ message: 'task not found' });
  }

  taskToUpdateOption[optionParam] = !taskToUpdateOption[optionParam]; // toggle boolean

  const updatedTaskOption = await updateTaskService(idParam, taskToUpdateOption);

  res.status(200).send({ message: 'starred', data: updatedTaskOption });
};
