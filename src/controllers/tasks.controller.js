'use strict';

import { getAllTasksService } from '../services/tasks.service.js';

export const getAllTasksController = async (req, res) => {
  const allTasks = await getAllTasksService();
  res.send(allTasks);
};
