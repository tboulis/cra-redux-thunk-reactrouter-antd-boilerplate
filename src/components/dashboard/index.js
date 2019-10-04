import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import { Skeleton } from 'antd';
import { GoogleLogin } from 'react-google-login';

import Layout from '../common/layout';

class Dashboard extends Component {
  constructor(props) {
    super();
    this.state = {
      loading: false,
    }
  }

  responseGoogle = (res, text) => {
    console.log(res, text);
  }

  render() {
    return (
      <Layout>
        { this.state.loading
          ? <div style={{ background: 'white', padding: 20}}><Skeleton loading active paragraph /></div>
          : <div>
            <GoogleLogin
              clientId="825072983966-6poqqin6jpnf0fcijnu4buv5j0g1m05j.apps.googleusercontent.com"
              buttonText="Login"
              onSuccess={(res) => this.responseGoogle(res, 'success')}
              onFailure={(res) => this.responseGoogle(res, 'failure')}
            />
          </div>
        }
      </Layout>
    );
  }
}

const mapStateToProps = (state) => { return { } };

const mapDispatchToProps = { };

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Dashboard));
