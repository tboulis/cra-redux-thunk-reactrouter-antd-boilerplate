import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import { Button, Form, Icon, Input, Row } from 'antd';

import PublicWrapper from '../../common/public-component';

// import { login } from '../../../actions/user';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state ={
      loading: false,
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.doLogin(values)
      }
    });
  }

  async doLogin(values) {
    this.setState({ loading: true })
    console.log(values);
  }

  render() {
    const { getFieldDecorator } = this.props.form;

    return (
      <PublicWrapper>
        <Row>
          <Form onSubmit={this.handleSubmit}>
            <Form.Item>
              {getFieldDecorator('email', {
                rules: [{
                  type: 'email',
                  message: 'Μη έγκυρη διεύθυνση e-mail!'
                },{ 
                  required: true,
                  message: 'Βάλτε το e-mail σας!'
                }],
              })(
                <Input
                  autoFocus
                  size='large'
                  prefix={
                    <Icon type='user' style={{ color: 'rgba(0,0,0,.25)' }} />
                  }
                  placeholder='e-mail'
                />
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('password', {
                rules: [{ required: true, message: 'Βάλτε τον κωδικό σας!' }],
              })(
                <Input
                  size='large'
                  prefix={
                    <Icon type='lock' theme='filled' style={{ color: 'rgba(0,0,0,.25)' }} />
                  }
                  type='password'
                  placeholder='Κωδικός'
                />
              )}
            </Form.Item>
            <Form.Item>
              <Button
                block
                type='primary'
                htmlType='submit'
                loading={this.state.loading}
                style={{
                  borderRadius: '20px',
                  height: '40px',
                  fontSize: '20px',
                  background: '#333'
                }}
              >
                Συνδεση
              </Button>
            </Form.Item>
          </Form>
          <div
            style={{
              marginTop: 20
            }}
          >
            <a
              href='/forgot-password'
              className='link'
            >
              Ξέχασες τον κωδικό σου;
            </a>
          </div>
        </Row>
        <Row className='register-prompt'>
          <a
            href='/register'
            className='link' 
            style={{
              border: '2px solid',
              padding: 5,
              borderRadius: 5
            }}
          >
            Κάνε Εγγραφή
            <Icon type="caret-right" theme="filled" />
          </a>
        </Row>
      </PublicWrapper>
    );
  }
}

const WrappedLogin = Form.create({ name: 'login' })(Login);

const mapStateToProps = (_state) => { return { } };

const mapDispatchToProps = {
  // userLogin: login // call this with this.props.userLogin(data)
};


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(WrappedLogin));
