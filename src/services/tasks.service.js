'use strict';

import Task from '../models/Task.js';

export const getAllTasksService = async () => {
  const allTasks = await Task.find();
  return allTasks;
};
