import { createSelector } from 'reselect';

const getToken = (state, _props) => {
  return state.user.token;
};

const makeIsLoggedIn = () => {
  return createSelector([ getToken ], (token) => {
    return !!token;
  });
};

export { makeIsLoggedIn };
