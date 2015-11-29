'use strict';
import React from 'react';
// import ApplicationStore from '../stores/ApplicationStore';

export class Html extends React.Component {
  render() {
    return (
      <html>
        <head>
        </head>
        <body>
          <div id="app"></div>
        </body>
        <script src="../build/client.js"></script>
      </html>
    );
  }
}
