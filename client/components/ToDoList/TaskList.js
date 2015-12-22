'use strict';

import React from 'react';
import connectToStores from 'fluxible-addons-react/connectToStores';
import serialize from 'form-serialize';
import TaskItem from './TaskItem';
import ToDoStore from '../../stores/ToDoStore';

@connectToStores([ToDoStore], context => ({
  tasks: context.getStore(ToDoStore).getTasks()
}))
class TaskList extends React.Component {
  static contextTypes = {
    getStore: React.PropTypes.func,
    executeAction: React.PropTypes.func
  };
  
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div className='task-list'>
        {this.props.tasks.map(task => {
          return (
            <TaskItem
              name={task.name}
            />
          )
        })}
      </div>
    );
  }
}

export default TaskList;

