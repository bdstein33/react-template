import React from 'react';
import TopNav from './TopNav';
import ApplicationStore from '../stores/ApplicationStore';
import {connectToStores, provideContext} from 'fluxible-addons-react';
import {handleHistory} from 'fluxible-router';

@provideContext
@handleHistory({enableScroll: false})
@connectToStores([ApplicationStore], (context) => ({
  ApplicationStore: context.getStore(ApplicationStore).getState()
}))
class Application extends React.Component {

  // static contextTypes = {
//     getStore: React.PropTypes.func,
//     executeAction: React.PropTypes.func
  // };

  // constructor(props, context) {
  //      super(props, context);
  // }
  // componentDidUpdate(prevProps) {
//     let newProps = this.props;
//     if (newProps.ApplicationStore.pageTitle === prevProps.ApplicationStore.pageTitle) {
//         return;
//     }
//     document.title = newProps.ApplicationStore.pageTitle;
  // }
  render() {
    let Handler = this.props.currentRoute.get('handler');
    //render content
    return (
      <div>
        <TopNav />
        <Handler />
      </div>
    );
  }
}

export default Application;
