import React from 'react';
import ProClock from '../components/pro-clock';
import {Typography} from 'antd';
import {useTimezone} from '../context/timezone';

function CurrentTime() {
  let timezone = useTimezone();

  return (
      <div>
        <span className='full-size'>
          <ProClock timezone={timezone} interval={1000}/>
        </span>
        <Typography.Title level={5} type="secondary"
                          className="controller">[Timezone: {timezone}]</Typography.Title>
      </div>
  );
}

export default CurrentTime;