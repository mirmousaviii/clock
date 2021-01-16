import React from 'react';
import {Select, Form} from 'antd';
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
        <Form.Item name="timezone" label="Timezone">
          <Select defaultValue={timezone}
                  onChange={handleChangeTimezone}
                  showSearch
          >
            {tzList.map((item, index) => (
                <Select.Option key={index} value={item}>{item}</Select.Option>
            ))}
          </Select>
        </Form.Item>
      </span>
  );
}

export default CurrentTime;