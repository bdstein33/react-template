'strict mode';

import React from 'react';

let SignUpForm = React.createClass({
  signup: function(e) {
    e.preventDefault();
    console.log('Signing up');
  },
  render: function() {
    return (
      <div>
        <h1>Sign Up Form</h1>
        <form>
          <p>Email</p>
          <input type="text" />
          <p>Pasword</p>
          <input type="password" />
          <input onClick={this.signup} type="submit" />

        </form>
      </div>
    );
  }
});

module.exports = SignUpForm;
