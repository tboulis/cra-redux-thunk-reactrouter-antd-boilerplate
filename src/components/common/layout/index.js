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
      <Layout style={{ minHeight: '100vh' }}>
        <Header style={{ padding: '0 20px' }}>
          <div style={{float: 'left', width: 120, textAlign: 'center', color: '#fff', background: 'grey'}}>Logo</div>
          <Menu
            theme='dark'
            mode='horizontal'
            defaultSelectedKeys={['1']}
            style={{ lineHeight: '64px', marginRight: 'auto', float: 'left' }}
          >
            <Menu.Item key='1' onClick={this.handleMenuClick}>
              <Icon theme='filled' type='home' />
              <span>1</span>
            </Menu.Item>
            <Menu.Item key='2' onClick={this.handleMenuClick}>
              <Icon theme='filled' type='message' />
              <span>1</span>
            </Menu.Item>
            <Menu.Item key='3' onClick={this.handleMenuClick}>
              <Icon theme='filled' type='user' />
              <span>1</span>
            </Menu.Item>
          </Menu>
          <div style={{
            height: 64,
            width: 100,
            float: 'right',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
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
        <Layout>
          <Sider
            width={200}
            style={{ background: '#fff' }}
            breakpoint='lg'
          >
            <Menu
              defaultSelectedKeys={['dashboard']}
              mode='inline'
              onClick={ this.handleSubMenuClick }
              selectedKeys={[this.state.currentSubmenuItem]}
              style={{ borderRight: 0 }}
            >
              <Menu.Item key='dashboard'>
                <Icon theme='filled' type='appstore' />
                <span>dashboard</span>
              </Menu.Item>
              <Menu.Item key='2'>
                <Icon theme='filled' type='file-text' />
                <span>2</span>
              </Menu.Item>
              <Menu.Item key='3'>
                <Icon theme='filled' type='edit' />
                <span>3</span>
              </Menu.Item>
              <Menu.Item key='4'>
                <Icon theme='filled' type='mail' />
                <span>4</span>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout style={{ padding: '24px' }}>
            <Content>
              { this.props.children }
            </Content>
            <Footer style={{ textAlign: 'center' }}>
              ReactJS/Redux Boilerplate © { new Date().getFullYear()}
            </Footer>
          </Layout>
        </Layout>
      </Layout>
    );
  }
}

const mapStateToProps = (_state) => { return { } };

const mapDispatchToProps = { };

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LayoutSider));
