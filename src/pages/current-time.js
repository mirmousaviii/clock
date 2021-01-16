import React from 'react';
import ProClock from '../components/pro-clock';
import {Typography} from 'antd';
import {TimezoneContext} from '../context/timezone';

function CurrentTime() {
  let [timezone] = React.useContext(TimezoneContext);

  return (
      <>
        <span className='full-size'>
          <ProClock timezone={timezone} interval={1000}/>
        </span>
        <Typography.Title level={4} type="secondary"
                          className="timezone">[Timezone: {timezone}]</Typography.Title>
      </>
  );
}

export default CurrentTime;