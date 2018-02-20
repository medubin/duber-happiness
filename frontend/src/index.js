import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';


//Components
import Root from './root';

//Store
import configureStore from './store';

// ReactDOM.render(<App />, document.getElementById('root'));

document.addEventListener('DOMContentLoaded', () => {
  let store;
  let currentUser = JSON.parse(localStorage.getItem('currentUser'));
  if (currentUser) {
    const preloadedState = { user: { currentUser: currentUser } };
    store = configureStore(preloadedState);
  } else {
    store = configureStore();
  }

  // let store = configureStore();

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root);
});

registerServiceWorker();


