'use strict';

import express from 'express';
const router = express.Router();

import swaggerUi from 'swagger-ui-express';
import swaggerDocument from '../../swagger.json';

router.use('/', swaggerUi.serve);
router.get('/', swaggerUi.setup(swaggerDocument));

export default router;
