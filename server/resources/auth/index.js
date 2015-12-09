'use strict';

import express from 'express';
import endpointLoader from '../../utils/endpointLoader';

let router = express.Router();

router.post('/', endpointLoader('auth/get'));

export default router;
