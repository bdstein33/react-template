// 'use strict';
// // import 'react';
// import React from 'react';
// // import ApplicationStore from '../stores/ApplicationStore';

// // export class Application extends React.Component {
// //   render() {
// //     return (
// //       <div>
// //         <h1>This is The application page of the react application!</h1>
// //       </div>
// //     );
// //   }
// // }

// var Application = React.createClass({
//   render: function() {
//     return (
//       <div>
//         This is The application page of the react application!
//       </div>
//     );
//   }
// });

// export default Application;

var React = require('react');

var Application = React.createClass({
  render: function() {
    return (
      <div>
        <h1>This is the main app page</h1>
      </div>
    )
  }
});

React.render(<Application />, document.getElementById('app'));
