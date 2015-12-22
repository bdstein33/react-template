'use strict';

export default {
  home: {
    path: '/',
    method: 'get',
    handler: require('../components/Home'),
    label: 'Home',
    action: (context, payload, done) => {
      context.dispatch('UPDATE_PAGE_TITLE', { pageTitle: 'Home' });
      done();
    }
  },
  login: {
    path: '/login',
    method: 'get',
    handler: require('../components/Login'),
    label: 'Home',
    action: (context, payload, done) => {
      context.dispatch('UPDATE_PAGE_TITLE', { pageTitle: 'Log In' });
      done();
    }
  },
  todo: {
    path: '/todo',
    method: 'get',
    handler: require('../components/ToDoList/Main'),
    label: 'ToDo',
    action: (context, payload, done) => {
      context.dispatch('UPDATE_PAGE_TITLE', { pageTitle: 'To Do List' });
      done();
    }
  }
};
