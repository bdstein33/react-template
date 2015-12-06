/*global App, document, window */
import React from 'react';
import {render} from 'react-dom';
import app from './app';
import { createElementWithContext } from 'fluxible-addons-react';

const bootstrapDebug = debug('Example');
const dehydratedState = window.App; // Sent from the server

bootstrapDebug('rehydrating app');
app.rehydrate(dehydratedState, function (err, context) {
  if (err) {
      throw err;
  }
  window.debug = debug;
  window.context = context;
  const mountNode = document.getElementById('app');

  bootstrapDebug('React Rendering');
  render(createElementWithContext(context), mountNode, () => {
      bootstrapDebug('React Rendered');
  });
});
