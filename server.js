'use strict';
require('babel/register');

// Express Configuration
import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import db from './server/db';
// API Routes
import auth from './server/resources/auth';
// Isomorphic React Routing
import serialize from 'serialize-javascript';
import {navigateAction} from 'fluxible-router';
import React from 'react';
import ReactDOM from 'react-dom/server';
import app from './app';
import HtmlComponent from './client/components/Html';
import {createElementWithContext} from 'fluxible-addons-react';

const server = express();

// Express Configuration
server.use('/public', express.static(__dirname + '/build'));
server.use(morgan('dev'));
server.use(bodyParser.json());

// Sync DB models before everything else
db.sequelize.sync().then(() => {
  // API Routes
  server.use('/api/auth', auth);

  // Isomorphic React Routing
  server.use((req, res, next) => {
    const context = app.createContext();

    console.log('Executing navigate action');
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

  const port = process.env.PORT || 8000;
  server.listen(port, () => {
    console.log('Listening on port ' + port);
  });
});
