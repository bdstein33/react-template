'use strict';

import express from 'express';
import endpointLoader from '../../utils/endpointLoader';

let router = express.Router();

router.post('/signup', endpointLoader('auth/signup'));
router.post('/login', endpointLoader('auth/login'));

export default router;
