import React from 'react';

function LogIn () {
  return (
    <div>
      <p>Log In</p>
      <form>
        <label>Email</label>
        <input type='text' name='email' />
        <label>Password</label>
        <input type='password' name='password' />
        <label>Confirm Password</label>
        <input type='password' name='confirm_password' />
      </form>
    </div>
  );
}

export default LogIn;
