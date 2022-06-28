'use strict';

import { getText } from '../services/tasks.service.js';

export const hello = (req, res) => {
  const text = getText();
  console.log(text);
  res.send(text);
};
