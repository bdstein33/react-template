'use strict';

export default {
  login: (context, payload) => {
    console.log('LOGGING IN!');
    context.dispatch('LOGIN');
  }
};
