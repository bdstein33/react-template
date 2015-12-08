'use strict';

import express from 'express';

let router = express.Router();

router.get('/', function(req, res) { console.log; res.send('Success'); });

export default router;
