import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import LoadingBar from 'react-redux-loading-bar';

import Routes from './routes';

class Main extends Component {
  render() {
    return (
      <div className='main'>
        <Helmet>
          <title>{ 'ReactJS/Redux Boilerplate' }</title>
        </Helmet>
        <LoadingBar />
        <Routes />
      </div>
    );
  }
}

export default Main;
