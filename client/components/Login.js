'use strict';

import React from 'react';
import serialize from 'form-serialize';
import {login} from '../actions/auth';

class Login extends React.Component {
  static contextTypes = {
    getStore: React.PropTypes.func,
    executeAction: React.PropTypes.func
  };
  
  constructor(props, context) {
    super(props, context);
  }

  logIn(e) {
    e.preventDefault();
    console.log('ATTEMPTING LOGIN');
    let formData = serialize(e.target, {hash: true});
    if (formData.password.length > 6 && formData.password === formData.confirm_password) {
      console.log(formData);
      // AppActions.login(formData);
      this.context.executeAction(login, formData);
    } 
    e.preventDefault();
  }

  render() {
    return (
      <div>
        <p>Log In</p>
        <form onSubmit={this.logIn.bind(this)}>
          <label>Email</label>
          <input type='text' name='email' />
          <label>Password</label>
          <input type='password' name='password' />
          <label >Confirm Password</label>
          <input type='password' name='confirm_password' />
          <input type='submit' />
        </form>
      </div>
    );
  }
}

export default Login;

