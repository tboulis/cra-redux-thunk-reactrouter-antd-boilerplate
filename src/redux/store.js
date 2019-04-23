import { applyMiddleware, compose, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web and AsyncStorage for react-native

import enhancers from './enhancers';
import { send } from '../helpers/requests';
import middlewares from './middlewares';
import createRootreducer from './reducers';
import subscribers from './subscribers';


const persistConfig = {
  key: 'root',
  storage,
  whitelist: [],
}

export const history = createBrowserHistory();
const persistedReducer = persistReducer(persistConfig, createRootreducer(history));

export default function configureStore(state) {
  const env = process.env.NODE_ENV;

  const allMiddlewares = [
    thunk.withExtraArgument(send),
    routerMiddleware(history),
    ...middlewares
  ];
  if (env === 'development') {
    const logger = createLogger({
      level: 'info',
      collapsed: true
    });
    allMiddlewares.push(logger);
  }

  const hasReduxDevtools = typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
  let composeEnhancers = (env === 'development' && hasReduxDevtools) ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ }) :
    compose;
  const enhancer = composeEnhancers(applyMiddleware(...allMiddlewares), ...enhancers);

  const store = createStore(persistedReducer, state, enhancer);
  const persistor = persistStore(store);

  store.subscribe(subscribers);

  return {store, persistor};
};
