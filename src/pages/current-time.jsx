import React from 'react';
import { Typography } from 'antd';
import ProClock from '../components/pro-clock';
import { useTimezone } from '../context/timezone';

function CurrentTime() {
  const timezone = useTimezone();

  return (
    <div>
      <span className="full-size">
        <ProClock timezone={timezone} interval={1000} />
      </span>
      <Typography.Title
        level={5}
        type="secondary"
        className="controller"
      >
        [Timezone:
        {' '}
        {timezone}
        ]
      </Typography.Title>
    </div>
  );
}

export default CurrentTime;
