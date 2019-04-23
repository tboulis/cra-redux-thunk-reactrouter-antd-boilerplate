export const USER_SIGNIN = 'USER_SIGNIN';
export const USER_SIGNOUT = 'USER_SIGNOUT';

export const REQUEST_LOGIN = 'REQUEST_LOGIN';
export const REQUEST_LOGIN_SUCCESS = 'REQUEST_LOGIN_SUCCESS';
export const REQUEST_LOGIN_FAIL = 'REQUEST_LOGIN_FAIL';

export const REQUEST_REGISTER = 'REQUEST_REGISTER';
export const REQUEST_REGISTER_SUCCESS = 'REQUEST_REGISTER_SUCCESS';
export const REQUEST_REGISTER_FAIL = 'REQUEST_REGISTER_FAIL';

export const REQUEST_LOGOUT = 'REQUEST_LOGOUT';

export const requestLogin = () => ({
  type: REQUEST_LOGIN
})

export const loginSuccess = (response) => ({
  type: REQUEST_LOGIN_SUCCESS,
  payload: response
})

export const loginFail = (response) => ({
  type: REQUEST_LOGIN_FAIL,
  payload: response
})

export const logout = () => ({
  type: REQUEST_LOGOUT
})

export const requestRegister = () => ({
  type: REQUEST_REGISTER
})

export const registerSuccess = (response) => ({
  type: REQUEST_REGISTER_SUCCESS,
  payload: response
})

export const registerFail = (response) => ({
  type: REQUEST_REGISTER_FAIL,
  payload: response
})

export const login = (data) => {
  return (dispatch, send) => {
    dispatch(requestLogin());
    return send({
      url: '/login',
      method: 'POST',
      data
    })
    .then(res =>  dispatch(loginSuccess(res.data.data.token)))
    .catch(err => {
      dispatch(loginFail(err));
      console.error(err);
    })
  }
}

export const register = (data) => {
  return (dispatch, send) => {
    dispatch(requestRegister());
    return send({
      url: '/register',
      method: 'POST',
      data
    })
    .then(res =>  dispatch(registerSuccess(res.data.token)))
    .catch(err => {
      dispatch(registerFail(err));
      console.log('error: ', err);
    })
  }
}
