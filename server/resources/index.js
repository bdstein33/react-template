'use strict';

import express from 'express';

let router = express.Router();

router.get('/', function(req, res) { 
  console.log('HERE');
  res.send('Success'); 
});
