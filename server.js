'use strict';

import 'localenv';
import express from 'express';
// import morgan from 'morgan';
import bodyParser from 'body-parser';

import {navigateAction} from 'fluxible-router';
import React from 'react';
import ReactDOM from 'react-dom/server';
import {createElementWithContext} from 'fluxible-addons-react';
import app from './app';
import HtmlComponent from '.components/Html';



const server = express();
const port = process.env.PORT || 3000;

console.log(__dirname + '/client/dist');
server.use('/public', express.static(__dirname + 'client'));
// server.use(morgan('dev'));

server.use(bodyParser.urlencoded({
  extended: true
}));

server.use(bodyParser.json());

server.use((req, res, next) => {
  const context = app.createContext();

  console.log('Executing navigate action');

  context.executeAction()

});

server.listen(port, () => {
  console.log('Listening on port ' + port);
});
