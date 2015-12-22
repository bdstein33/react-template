'use strict';

import React from 'react';
import serialize from 'form-serialize';
import {createTask} from '../../actions/todolist';

class TaskForm extends React.Component {
  static contextTypes = {
    getStore: React.PropTypes.func,
    executeAction: React.PropTypes.func
  };
  
  constructor(props, context) {
    super(props, context);
  }

  createTask(e) {
    e.preventDefault();
    let formData = serialize(e.target, {hash: true});
    if (formData.name && formData.name.length > 0) {
      this.context.executeAction(createTask, formData.name);
    }
  }

  render() {
    return (
      <form onSubmit={this.createTask.bind(this)}>
        <label>Task Name</label>
        <input type='text' name='name' />
        <input type='submit' />
      </form>
    );
  }
}

export default TaskForm;
