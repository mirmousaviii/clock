import React from 'react';
import {InputNumber} from 'antd';
import {TimezoneContext} from '../context';

function CurrentTime() {

  let Timezone = React.useContext(TimezoneContext);

  function onChange(value) {
    console.log('changed', value);
  }

  return (
      <span>
        Time Zone: <InputNumber min={-12} max={13} defaultValue={Timezone}
                                onChange={onChange}/>
      </span>
  );
}

export default CurrentTime;