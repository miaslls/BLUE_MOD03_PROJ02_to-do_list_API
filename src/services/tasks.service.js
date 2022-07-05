'use strict';

const Task = require('../models/Task.js');

const getAllTasksService = async () => {
  return await Task.find();
};

const getTasklistService = async (tasklist) => {
  return await Task.find({ tasklist: tasklist });
};

const getTaskByIdService = async (id) => {
  return await Task.findById(id);
};

const addTaskService = async (newTask) => {
  return await Task.create(newTask);
};

const updateTaskService = async (id, taskBody) => {
  return await Task.findByIdAndUpdate(id, taskBody).setOptions({ returnOriginal: false });
};

const deleteTaskService = async (id) => {
  return await Task.findByIdAndDelete(id);
};

module.exports = {
  getAllTasksService,
  getTasklistService,
  getTaskByIdService,
  addTaskService,
  updateTaskService,
  deleteTaskService,
};
