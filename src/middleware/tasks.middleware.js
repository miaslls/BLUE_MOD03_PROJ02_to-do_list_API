'use strict';

import mongoose from 'mongoose';

export const validId = (req, res, next) => {
  const idParam = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(idParam)) {
    return res.status(400).send({ message: 'invalid ID' });
  }

  next();
};

export const validObjectBody = (req, res, next) => {
  const taskBody = req.body;

  if (!taskBody || !taskBody.text || !taskBody.tasklist) {
    return res.status(400).send({ message: 'incomplete data' });
  }

  next();
};
