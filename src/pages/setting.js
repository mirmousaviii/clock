import React from 'react';
import {Select} from 'antd';
import {TimezoneContext} from '../context/timezone';
import momentTimezone from 'moment-timezone';

function CurrentTime() {
  const [timezone, setTimezone] = React.useContext(TimezoneContext);

  const tzList = momentTimezone.tz.names();

  function handleChangeTimezone(value) {
    setTimezone(value);
  }

  return (
      <span>
        <Select defaultValue={timezone} onChange={handleChangeTimezone}>
          {tzList.map((item, index) => (
              <Select.Option key={index} value={item}>{item}</Select.Option>
          ))}
        </Select>
      </span>
  );
}

export default CurrentTime;