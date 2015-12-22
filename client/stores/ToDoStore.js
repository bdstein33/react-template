'use strict';

import {BaseStore} from 'fluxible/addons';

class ToDoStore extends BaseStore {
  initialize() {
    this.tasks = [{id: 1, name: 'First Task'}];
  }

  getTasks() {
    return this.tasks
  }
  createTask(payload) {
    this.tasks.push({id: 2, name: payload});
    this.emitChange();
  }
}

ToDoStore.storeName = 'ToDoStore';
ToDoStore.handlers = {
  'CREATE_TASK'    : 'createTask'
};

export default ToDoStore;
