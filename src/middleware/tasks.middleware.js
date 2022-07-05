'use strict';

const mongoose = require('mongoose');

const validId = (req, res, next) => {
  const idParam = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(idParam)) {
    return res.status(400).send({ message: 'invalid ID' });
  }

  next();
};

const validObjectBody = (req, res, next) => {
  const taskBody = req.body;

  if (
    !taskBody ||
    !taskBody.text ||
    !taskBody.tasklist ||
    taskBody.star === undefined ||
    taskBody.complete === undefined
  ) {
    return res.status(400).send({ message: 'incomplete data' });
  }

  next();
};

module.exports = { validId, validObjectBody };
