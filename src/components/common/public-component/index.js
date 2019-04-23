import React, { Component } from 'react';

class PublicWrapper extends Component {
  render () {
    return (
      <div className='limiter'>
        <div className='container-login'>
          { this.props.children}
        </div>
      </div>
    )
  }
}

export default PublicWrapper;