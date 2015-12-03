import React from 'react';
import Fluxible from 'fluxible';
import Application from 'client/components/Application';

let app = new Fluxible({
  comonent: Application,
  stores: []
});

export default app;
