'use strict';

import Q from 'q';

export default (payload) => {
  return Q.resolve({payload: payload});
};
