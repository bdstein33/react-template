'use strict';

import React from 'react';
import SignUpForm from './Auth/SignupForm.jsx';

let Application = React.createClass({
  render: function() {
    return (
      <div>
        <h1>This is the main app page!</h1>
        <SignUpForm />
      </div>
    );
  }
});

export default Application;
