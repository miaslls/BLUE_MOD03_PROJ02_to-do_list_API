'use strict';

import mongoose from 'mongoose';

import {
  getAllTasksService,
  getTasklistService,
  getTaskByIdService,
} from '../services/tasks.service.js';

export const getAllTasksController = async (req, res) => {
  const allTasks = await getAllTasksService();
  res.status(200).send(allTasks);
};

export const getTasklistController = async (req, res) => {
  const tasklistParam = req.params.tasklist;
  const chosenTasklist = await getTasklistService(tasklistParam);

  if (chosenTasklist[0] === undefined) {
    res.status(206).send({ message: 'tasklist empty' });
  } else {
    res.send({ tasklist: tasklistParam, chosenTasklist });
  }
};

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
