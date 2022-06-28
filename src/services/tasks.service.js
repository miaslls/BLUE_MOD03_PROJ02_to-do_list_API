'use strict';

import Task from '../models/Task.js';

export const getAllTasksService = async () => {
  const allTasks = await Task.find();
  return allTasks;
};

export const getTasklistService = async (tasklist) => {
  const chosenTasklist = [];
  const allTasks = await Task.find();

  for (let task of allTasks) {
    if (task.tasklist === tasklist) {
      chosenTasklist.push(task);
    }
  }

  return chosenTasklist;
};

export const getTaskByIdService = async (id) => {
  const chosenTask = await Task.findById(id);
  return chosenTask;
};

export const addTaskService = async (newTask) => {
  const addedTask = await Task.create(newTask);
  return addedTask;
};
