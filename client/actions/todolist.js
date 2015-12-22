'use strict';

import ToDoStore from '../stores/ToDoStore';
export default {
  createTask: (context, payload) => {
    console.log('Starting createTask action');

    let todoStore = context.getStore(ToDoStore)
    context.dispatch('CREATE_TASK', payload);
  }
};
