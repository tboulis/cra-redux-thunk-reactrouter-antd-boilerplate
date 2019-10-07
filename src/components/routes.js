import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Dashboard from './dashboard';
import ForgotPassword from './public-pages/forgot-password';
import Login from './public-pages/login';
import NotFound from './common/not-found';
import Register from './public-pages/register';
import Reset from './public-pages/reset';

const isAuthenticated = (props) => {
  return true;
}

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        isAuthenticated(props) ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: props.location }
            }}
          />
        )
      }
    />
  )
}

const Routes = () => {
  return (
    <Switch>
      <PrivateRoute exact path='/' component={ Dashboard } />
      <Route path='/login' component={ Login } />
      <Route path='/register' component={ Register } />
      <Route path='/reset' component={ Reset } />
      <Route path='/forgot-password' component={ ForgotPassword } />
      <Route component={ NotFound } />
    </Switch>
  );
};

export default Routes;
