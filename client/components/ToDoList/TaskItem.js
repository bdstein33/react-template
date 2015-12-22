'use strict';

import React from 'react';
import serialize from 'form-serialize';

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
      <div className="task-item">
        {this.props.name}
      </div>
    );
  }
}

export default TaskList;

