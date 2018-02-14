import React from 'react';
import { Provider } from 'react-redux';

// react router
import { Router, Route, IndexRoute, browserHistory, Switch } from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory';


// react components
import App from './App'
import UserForm from './user/components/user_form'

const Root = ({ store }) => {
  const _ensureLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().user.currentUser;
    if (!currentUser) {
      replace('/login');
    }
  };

  // const _redirectIfLoggedIn = (nextState, replace) => {
  //   const currentUser = store.getState().user.currentUser;
  //   if (currentUser) {
  //     replace('/');
  //   }
  // };

  const history = createBrowserHistory();

  return (
    <Provider store={store}>
       <Router history={history} >
       <Switch>
         <Route path="/" component={App}> 
         </Route>
         </Switch>
       </Router>
     </Provider>
   );


}

export default Root;
