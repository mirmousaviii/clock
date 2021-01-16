import React from 'react';
import ProClock from '../components/pro-clock';
import {TimezoneContext} from '../context';
import {Typography} from 'antd';

function CurrentTime() {
  let Timezone = React.useContext(TimezoneContext);

  return (
      <>
        <span className='full-size'>
          <ProClock/>
        </span>
        <Typography.Title level={4} type="secondary"
                          className="timezone">[GMT {Timezone}]</Typography.Title>
      </>
  );
}

export default CurrentTime;