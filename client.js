import React from 'react';
import {render} from 'react-dom';
import app from './app';
import { createElementWithContext } from 'fluxible-addons-react';

const dehydratedState = window.App; // Sent from the server

app.rehydrate(dehydratedState, function (err, context) {
  if (err) {
    throw err;
  }
  window.context = context;
  const mountNode = document.getElementById('app');

  console.log('React Rendering');
  render(createElementWithContext(context), mountNode, () => {
    console.log('React Rendered');
  });
});
