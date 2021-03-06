'use strict';

import React from 'react';
import Fluxible from 'fluxible';
import Application from './client/components/Application';
import RouteStore from './client/stores/RouteStore';
import ApplicationStore from './client/stores/ApplicationStore';
import AuthStore from './client/stores/AuthStore';
import ToDoStore from './client/stores/ToDoStore';

let app = new Fluxible({
  component: Application,
  stores: [
    RouteStore,
    ApplicationStore,
    AuthStore,
    ToDoStore
  ]
});

export default app;
