'use strict';

const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema(
  {
    text: { type: String, required: true },
    tasklist: { type: String, required: true },
    star: { type: Boolean, required: true },
    complete: { type: Boolean, required: true },
  },
  { collection: 'tasks', versionKey: false },
);

const Task = mongoose.model('Task', TaskSchema);

module.exports = Task;
