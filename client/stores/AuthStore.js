'use strict';

import {BaseStore} from 'fluxible/addons';

class AuthStore extends BaseStore {
  login(payload) {
    this.pageTitle = payload.pageTitle;
    this.emitChange();
  }
}

AuthStore.storeName = 'AuthStore';
AuthStore.handlers = {
  'LOGIN'    : 'login'
};

export default AuthStore;
