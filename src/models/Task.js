'use strict';

import mongoose from 'mongoose';

const TaskSchema = new mongoose.Schema(
  {
    text: { type: String, required: true },
    tasklist: { type: String, required: true },
    priority: { type: Boolean, required: true },
    completed: { type: Boolean, required: true },
  },
  { collection: 'tasks', versionKey: false },
);

const Task = mongoose.model('Task', TaskSchema);

export default Task;
