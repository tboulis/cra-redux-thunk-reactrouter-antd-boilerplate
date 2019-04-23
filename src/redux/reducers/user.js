import { REQUEST_LOGIN, REQUEST_LOGIN_SUCCESS, REQUEST_LOGIN_FAIL,
  REQUEST_LOGOUT,
  REQUEST_REGISTER, REQUEST_REGISTER_SUCCESS, REQUEST_REGISTER_FAIL } from '../actions/user';

const defaultState = {
  token: null,
  loading: false,
  loaded: false
}

const reducer = (state = {}, action) => {
  switch (action.type) {
    case REQUEST_LOGIN:
      return {...state, loading: true}

    case REQUEST_LOGIN_SUCCESS:
      return {...state, token: action.payload, loaded: true, loading: false}

    case REQUEST_LOGIN_FAIL:
      return {...state, token: null, loaded: false, loading: false}

    case REQUEST_REGISTER:
      return {...state, loading: true}

    case REQUEST_REGISTER_SUCCESS:
      return {...state, loading: false}

    case REQUEST_REGISTER_FAIL:
      return {...state, token: null, loaded: false, loading: false}

    case REQUEST_LOGOUT:
      return defaultState;

    default:
      return state;
  }
}

export default reducer;
