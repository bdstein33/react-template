'use strict';

import React from 'react';
import serialize from 'form-serialize';
import TaskForm from './TaskForm';
import TaskList from './TaskList';

class Login extends React.Component {
  static contextTypes = {
    getStore: React.PropTypes.func,
    executeAction: React.PropTypes.func
  };
  
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div>
        <p>Create Task</p>
        <TaskForm />
        <TaskList />
      </div>
    );
  }
}

export default Login;

