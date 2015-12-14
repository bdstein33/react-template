'use strict';

import React from 'react';
import {NavLink} from 'fluxible-router';

class TopNav extends React.Component {
  static contextTypes = {
    getStore: React.PropTypes.func,
    executeAction: React.PropTypes.func
  };
  
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div className='topnav'>
        <div className='link'><NavLink routeName='home'>Home</NavLink></div>
        <div className='link'><NavLink routeName='login'>Login</NavLink></div>
      </div>
    );
  }
}

export default TopNav;
