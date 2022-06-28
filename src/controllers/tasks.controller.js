'use strict';

import { getAllTasksService, getTasklistService } from '../services/tasks.service.js';

export const getAllTasksController = async (req, res) => {
  const allTasks = await getAllTasksService();
  res.send(allTasks);
};

export const getTasklistController = async (req, res) => {
  const tasklistParam = req.params.tasklist;
  const chosenTasklist = await getTasklistService(tasklistParam);

  if (chosenTasklist[0] === undefined) {
    res.send({ message: 'tasklist empty' });
  } else {
    res.send({ tasklist: tasklistParam, chosenTasklist });
  }
};
