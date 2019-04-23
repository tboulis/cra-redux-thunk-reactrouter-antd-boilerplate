import React, { Component } from 'react';
import { withRouter } from 'react-router';


import { Avatar, Button, Form, Icon, Input } from 'antd';


class Reset extends Component {
  constructor(props) {
    super(props);
    this.state ={ }
  }

  async doReset(e) {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log(values);
      }
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;

    return (
      <div className='homepage'>
        <div className='grid' justify='center' >
          <main className='main'>
            <div className='paper'>
              <Avatar icon='lock' />
              <div component='h1'>
                Επαναφορά Κωδικού
              </div>
              <Form onSubmit={ this.doReset }>
                <Form.Item>
                  {getFieldDecorator('email', {
                    rules: [{ required: true, message: 'Βάλτε το e-mail σας!' }],
                  })(
                    <Input
                      autoFocus
                      type='email'
                      prefix={
                        <Icon type='user' style={{ color: 'rgba(0,0,0,.25)' }} />
                      }
                      placeholder='e-mail'
                    />
                  )}
                </Form.Item>
                <Button
                  type='primary'
                  className='loginButton'
                  htmlType='submit'
                >
                  Επαναφορά
                </Button>
              </Form>
            </div>
          </main>
        </div>
      </div>
    );
  }
}

const WrappedReset = Form.create({ name: 'reset' })(Reset);



export default withRouter(WrappedReset);
