'use strict';

import Task from '../models/Task.js';

export const getAllTasksService = async () => {
  return await Task.find();
};

export const getTasklistService = async (tasklist) => {
  return await Task.find({ tasklist: tasklist });
};

export const getTaskByIdService = async (id) => {
  return await Task.findById(id);
};

export const addTaskService = async (newTask) => {
  return await Task.create(newTask);
};

export const updateTaskService = async (id, taskBody) => {
  return await Task.findByIdAndUpdate(id, taskBody).setOptions({ returnOriginal: false });
};
