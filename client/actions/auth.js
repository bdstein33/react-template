'use strict';

export default {
  login: (context, payload) => {
    context.dispatch('LOGIN', payload);
  }
};
