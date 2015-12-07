import React from 'react';
import {NavLink} from 'fluxible-router';

class TopNav extends React.Component {
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
