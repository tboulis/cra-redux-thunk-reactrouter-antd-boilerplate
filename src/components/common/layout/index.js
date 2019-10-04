import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import {
  Avatar, Button, Dropdown, Icon, Layout, Menu,
} from 'antd';

const {
  Header, Content, Footer, Sider,
} = Layout;

class LayoutSider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
    };
  }

  toggle = (e) => {
    e.stopPropagation();
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  onCollapse = (collapsed) => {
    this.setState({ collapsed });
  }

  handleMenuClick = (e) => {
    // this.props.history.push(`/route`)
    console.log(e);
  }

  handleSubMenuClick = (e) => {
    // this.props.history.push(`/subroute`)
    console.log(e);
  }

  handleDropDownClick = (e) => {
    console.log(e)
  }

  doLogout = () => {
    console.log('log-out');
  }

  render() {
    const userMenu = (
      <Menu onClick={this.handleDropDownClick}>
        <Menu.Item key='profile'><Icon type='user' />Προφίλ</Menu.Item>
        <Menu.Item key='settings'><Icon type='setting' />Ρυθμίσεις</Menu.Item>
        <Menu.Item key='logout' onClick={this.doLogout}><Icon type='logout' />Έξοδος</Menu.Item>
      </Menu>
    );

    const notificationsMenu = (
      <Menu onClick={this.handleDropDownClick}>
        <Menu.Item key='noti1'>Notification1</Menu.Item>
        <Menu.Item key='noti2'>Notification2</Menu.Item>
        <Menu.Item key='noti3'>Notification3</Menu.Item>
        <Menu.Item key='noti4'>Notification4</Menu.Item>
        <Menu.Item key='noti5'>Notification5</Menu.Item>
      </Menu>
    );

    return (
      <Layout style={{ height: '100vh' }}>
        <Sider
          breakpoint='lg'
          collapsedWidth='0'
          onBreakpoint={(broken) => { }}
          onCollapse={(collapsed, type) => { }}
        >
          <div style={{
            margin: '6px auto 3px',
            height: 40,
            lineHeight: '40px',
            width: 120,
            textAlign: 'center',
            color: '#fff',
            background: 'grey',
          }}>Logo</div>
          <Menu
            theme='dark'
            mode='inline'
            defaultSelectedKeys={['1']}
            style={{ lineHeight: '64px', marginRight: 'auto', float: 'left' }}
          >
            <Menu.Item key='1' onClick={this.handleMenuClick}>
              <Icon type='home' />
              <span>menu item 1</span>
            </Menu.Item>
            <Menu.Item key='2' onClick={this.handleMenuClick}>
              <Icon type='message' />
              <span>menu item 2</span>
            </Menu.Item>
            <Menu.Item key='3' onClick={this.handleMenuClick}>
              <Icon type='user' />
              <span>menu item 3</span>
            </Menu.Item>
            <Menu.Item key='4' onClick={this.handleMenuClick}>
              <Icon type='user' />
              <span>menu item 4</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header
            style={{ background: '#fff', padding: 0 }}
          >
            <Menu
              defaultSelectedKeys={['1']}
              mode='horizontal'
              onClick={ this.handleSubMenuClick }
              style={{ width: 'auto', maxWidth: 330, display: 'inline-block' }}
            >
              <Menu.Item key='1'>
                <Icon theme='filled' type='appstore' />
                <span>submenu item 1</span>
              </Menu.Item>
              <Menu.Item key='2'>
                <Icon theme='filled' type='file-text' />
                <span>submenu item 2</span>
              </Menu.Item>
            </Menu>
            <div style={{
              height: 64,
              width: 100,
              float: 'right',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              alignItems: 'center',
            }}>
              <Dropdown overlay={notificationsMenu} trigger={['click']} placement='bottomRight'>
                <Button shape='circle' icon='bell' style={{ cursor: 'pointer' }} />
              </Dropdown>
              <Dropdown overlay={userMenu} trigger={['click']}>
                <Avatar
                  shape='square'
                  size={50}
                  style={{ cursor: 'pointer' }}
                  icon='user'
                />
              </Dropdown>
            </div>
          </Header>
          <Content style={{ margin: '24px 16px 0' }}>
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
              { this.props.children }
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            ReactJS/Redux Boilerplate © { new Date().getFullYear()}
          </Footer>
        </Layout>
      </Layout>
    );
  }
}

const mapStateToProps = (_state) => { return { } };

const mapDispatchToProps = { };

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LayoutSider));
