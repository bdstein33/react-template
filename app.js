'use strict';

import React from 'react';
import Fluxible from 'fluxible';
import Application from './client/components/Application';
import RouteStore from './client/stores/RouteStore';
import ApplicationStore from './client/stores/ApplicationStore';

let app = new Fluxible({
  component: Application,
  stores: [
    RouteStore,
    ApplicationStore
  ]
});

export default app;
