import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router'
import { loadingBarReducer } from 'react-redux-loading-bar';

import resettableReducer from './resettable';
import { REQUEST_LOGOUT } from '../actions/user';
import settings from './settings';
import user from './user';

const resettable = resettableReducer(REQUEST_LOGOUT);

export default (history) => combineReducers({
  loadingBar: loadingBarReducer,
  router: connectRouter(history),
  settings: settings,
  user: resettable(user),
});
