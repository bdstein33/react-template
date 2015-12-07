import React from 'react';
import serialize from 'form-serialize';

class LogIn extends React.Component {
  logIn(e) {
    // console.log(e);
    console.log(e.target);
    console.log(serialize(e.target, {hash: true}));
    let formData = serialize(e.target, {hash: true});
    if (formData.password.length > 6 && formData.password === formData.confirm_password) {
      // Create Account
    } else {
      // Throw Error
    }
    e.preventDefault();
  }

  render() {
    return (
      <div>
        <p>Log In</p>
        <form onSubmit={this.logIn}>
          <label>Email</label>
          <input type='text' name='email' />
          <label>Password</label>
          <input type='password' name='password' />
          <label onClick={this.test}>Confirm Password</label>
          <input type='password' name='confirm_password' />
          <input type='submit' />
        </form>
      </div>
    );
  }
}

export default LogIn;

