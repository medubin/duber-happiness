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
  if (window.currentUser) {
    const preloadedState = { user: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
  } else {
    store = configureStore();
  }

  // let store = configureStore();

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root);
});

registerServiceWorker();


