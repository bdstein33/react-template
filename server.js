'use strict';

require('localenv');
var express = require('express'),
  morgan = require('morgan'),
  bodyParser = require('body-parser'),
  debug = require('debug')('(Server)'),
  app = module.exports = express(),
  port;

app.use('/', express.static('client'));
app.use(morgan('dev'));

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json());

// let auth = require('./server/resources/auth');
// app.use('/', auth);

port = process.env.PORT || 3000;
app.listen(port, function() {
  debug('Listening on port ' + port);
});
