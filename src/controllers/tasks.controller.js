'use strict';

import mongoose from 'mongoose';

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
  res.status(200).send(allTasks);
};

// 📌 ----- GET tasklist

export const getTasklistController = async (req, res) => {
  const tasklistParam = req.params.tasklist;
  const chosenTasklist = await getTasklistService(tasklistParam);

  if (chosenTasklist[0] === undefined) {
    res.status(206).send({ message: 'tasklist empty' });
  } else {
    res.send({ tasklist: tasklistParam, chosenTasklist });
  }
};

// 📌 ----- GET task by ID

export const getTaskByIdController = async (req, res) => {
  const idParam = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(idParam)) {
    return res.status(400).send({ message: 'invalid ID' });
  }

  const chosenTask = await getTaskByIdService(idParam);

  if (!chosenTask) {
    return res.status(404).send({ message: 'task not found' });
  }

  res.send(chosenTask);
};

// 📌 ----- PUT add task

export const addTaskController = async (req, res) => {
  const taskBody = req.body;

  if (!taskBody || !taskBody.text || !taskBody.tasklist) {
    return res.status(400).send({ message: 'incomplete data' });
  }

  const newTask = await addTaskService(taskBody);

  res.status(201).send({ message: 'added', newTask });
};

// 📌 ----- POST update task

export const updateTaskController = async (req, res) => {
  const idParam = req.params.id;
  const taskBody = req.body;

  if (!mongoose.Types.ObjectId.isValid(idParam)) {
    return res.status(400).send({ message: 'invalid ID' });
  }

  const taskToBeUpdated = await getTaskByIdService(idParam);

  if (!taskToBeUpdated) {
    return res.status(404).send({ message: 'task not found' });
  }

  if (!taskBody || !taskBody.text || !taskBody.tasklist) {
    return res.status(400).send({ message: 'incomplete data' });
  }

  const updatedTask = await updateTaskService(idParam, taskBody);

  res.status(200).send({ message: 'updated', updatedTask });
};

// 📌 ----- DELETE task

export const deleteTaskController = async (req, res) => {
  const idParam = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(idParam)) {
    return res.status(400).send({ message: 'invalid ID' });
  }

  const taskToBeDeleted = await getTaskByIdService(idParam);

  if (!taskToBeDeleted) {
    return res.status(404).send({ message: 'task not found' });
  }

  const deletedTask = await deleteTaskService(idParam);

  res.status(200).send({ message: 'deleted', deletedTask });
};
