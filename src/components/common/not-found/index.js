import React from 'react';

import { Button, Empty } from 'antd';

const NotFound = (props) => {
  return (
    <Empty
      image="https://gw.alipayobjects.com/mdn/miniapp_social/afts/img/A*pevERLJC9v0AAAAAAAAAAABjAQAAAQ/original"
      description={
        <span>
          Η σελίδα δε βρέθηκε. Πατήστε το κουμπί για να γυρίσετε στην αρχική.
        </span>
      }
    >
      <Button
        type='primary'
        onClick={() => {
          props.history.push('/');
        }}
      >
        Πίσω
      </Button>
    </Empty>
  )
}

export default NotFound;