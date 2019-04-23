import React from 'react';
import ReactDOM from 'react-dom';

import { ConnectedRouter } from 'connected-react-router';
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux';


import isUnauthorised from './redux/actions/system.js';
import { setLanguage } from './helpers/languages';

import Main from './components';
import { bindUnauthorised } from './helpers/requests';
import configureStore, { history } from './redux/store';

import './assets/css/index.css';

// Build the store and history.
const { store, persistor } = configureStore({ });

// Perform initialisations.
setLanguage(store.getState().settings.language);
bindUnauthorised(() => {
  store.dispatch(isUnauthorised());
});

const render = () => {
  return (
    <Provider store={ store }>
      <PersistGate loading={null} persistor={ persistor }>
        <ConnectedRouter history={ history }>
          <Main />
        </ConnectedRouter>
      </PersistGate>
    </Provider>
  );
};

const root = document.getElementById('root');
ReactDOM.render(render(), root);
