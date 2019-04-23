import actions from '../actions/user';
import IS_UNAUTHORISED from '../actions/system';
import { makeIsLoggedIn } from '../selectors/user';

const unauthorisedAccess = (store) => {
  const isLoggedIn = makeIsLoggedIn();
  return (next) => {
    return (action) => {
      if (action.type === IS_UNAUTHORISED && isLoggedIn(store.getState())) {
        store.dispatch(actions.signout());
      }
      return next(action);
    };
  };
};

export default unauthorisedAccess;
