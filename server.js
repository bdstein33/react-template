'use strict';
require('babel/register');

import express from 'express';
// import favicon from 'serve-favicon';
import morgan from 'morgan';
import serialize from 'serialize-javascript';
import {navigateAction} from 'fluxible-router';
import React from 'react';
import ReactDOM from 'react-dom/server';
import app from './client/app';
import HtmlComponent from './client/components/Html';
import {createElementWithContext} from 'fluxible-addons-react';

const server = express();

//server.use(favicon(__dirname + '/../favicon.ico'));
server.use('/public', express.static(__dirname + '/build'));
server.use(morgan('dev'));

import auth from './server/resources/auth';
server.use('/api/auth', auth);

server.use((req, res, next) => {
  const context = app.createContext();

  context.executeAction(navigateAction, { url: req.url }, (err) => {
    if (err) {
      if (err.statusCode && err.statusCode === 404) {
        next();
      } else {
        next(err);
      }
      return;
    }

    console.log('Exposing context state');
    const exposed = 'window.App=' + serialize(app.dehydrate(context)) + ';';

    console.log('Rendering Application component into html');
    const html = ReactDOM.renderToStaticMarkup(React.createElement(HtmlComponent, {
      state: exposed,
      markup: ReactDOM.renderToString(createElementWithContext(context)),
      context: context.getComponentContext()
    }));

    console.log('Sending markup');
    res.send(html);
  });
});

const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log('Listening on port ' + port);
});

