import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import { Button, Divider, Form, Icon, Input, Row } from 'antd';

// import { register } from '../../../actions/user';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state ={
      loading: false,
    }
  }

  handleConfirmBlur = (e) => {
    const value = e.target.value;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  }

  compareToFirstPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && value !== form.getFieldValue('password')) {
      callback('Οι κωδικοί που βάλατε δεν ταιριάζουν!');
    } else {
      callback();
    }
  }

  validateToNextPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && this.state.confirmDirty) {
      form.validateFields(['confirm'], { force: true });
    }
    callback();
  }

  doRegister = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log(values);
      }
    })
  }

  render() {
    const { getFieldDecorator } = this.props.form;

    return (
      <div className='limiter'>
        <div
					style={{
						position: 'fixed',
						left: 15,
						top: 15,
						zIndex: 2,
					}}
				>
					<Icon
						onClick={() => this.props.history.push('/login')}
						style={{
							color: 'white',
							fontSize: 24,
							lineHeight: '24px',
						}}
						type='arrow-left'
					/>
					<Divider type='vertical' style={{ height: '24px', top: '-0.26em' }} />
					<span style={{ fontSize: 20, color: 'white', lineHeight: '24px'}}> Πίσω</span>
				</div>
        <div className='container-login'>
          <Row style={{ width: '100%' }}>
            <div>
              <h2 style={{ color: 'white' }}>
                Εγγραφή Χρήστη
              </h2>
              <Form onSubmit={this.doRegister} style={{ minWidth: 270, width: '100%', maxWidth: 400, margin: 'auto' }}>
                <Form.Item>
                  {getFieldDecorator('email', {
                    rules: [{
                      type: 'email', message: 'Μη έγκυρη διεύθυνση e-mail!'
                    },{
                      required: true, message: 'Συμπλήρωσε το e-mail σου!'
                    }],
                  })(
                    <Input
                      autoFocus
                      placeholder='e-mail'
                    />
                  )}
                </Form.Item>
                <Form.Item>
                  {getFieldDecorator('fname', {
                    rules: [{ required: true, message: 'Συμπλήρωσε το Όνομά σου!' }],
                  })(
                    <Input
                      type='text'
                      placeholder='Όνομα'
                    />
                  )}
                </Form.Item>
                <Form.Item>
                  {getFieldDecorator('lname', {
                    rules: [{ required: true, message: 'Συμπλήρωσε το Επίθετό σου!' }],
                  })(
                    <Input
                      type='text'
                      placeholder='Επίθετο'
                    />
                  )}
                </Form.Item>
                <Form.Item>
                  {getFieldDecorator('password', {
                    rules: [{
                      required: true, message: 'Συμπλήρωσε τον Κωδικό Πρόσβασης!'
                    },{
                      validator: this.validateToNextPassword,
                    }],
                  })(
                    <Input
                      type='password'
                      placeholder='Κωδικός Πρόσβασης'
                    />
                  )}
                </Form.Item>
                <Form.Item>
                  {getFieldDecorator('password-confirm', {
                    rules: [{
                      required: true, message: 'Επιβεβαίωσε τον Κωδικό Πρόσβασης!'
                    },{
                      validator: this.compareToFirstPassword,
                    }],
                  })(
                    <Input
                      type='password'
                      onBlur={this.handleConfirmBlur}
                      placeholder='Επιβεβαίωση Κωδικού'
                    />
                  )}
                </Form.Item>
                <Button
                  block
                  htmlType='submit'
                  loading={this.state.loading}
                  color='primary'
                  className='loginButton'
                  style={{
                    background: '#333',
                    border: 'none',
                    borderRadius: '20px',
                    color: 'white',
                    fontSize: '20px',
                    height: '40px',
                  }}
                >
                  Εγγραφή
                </Button>
              </Form>
            </div>
          </Row>
        </div>
      </div>
    );
  }
}

const WrappedRegister = Form.create({ name: 'register' })(Register);

const mapStateToProps = (_state) => {
  return {
    // user: _state.user
  };
};

const mapDispatchToProps = {
  // doRegisterUser: register 
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(WrappedRegister));
