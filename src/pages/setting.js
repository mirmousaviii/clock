import React from 'react';
import {Select, Form} from 'antd';
import momentTimezone from 'moment-timezone';
import {TimezoneContext, SetTimezoneContext} from '../context/timezone';

function Setting() {
  const timezone = React.useContext(TimezoneContext);
  const setTimezone = React.useContext(SetTimezoneContext);

  const tzList = momentTimezone.tz.names();

  function handleChangeTimezone(value) {
    setTimezone(value);
  }

  return (
      <Form name="setting">
        <Form.Item label="Timezone">
          <Select defaultValue={timezone}
                  onChange={handleChangeTimezone}
                  showSearch
          >
            {tzList.map((item, index) => (
                <Select.Option key={index} value={item}>{item}</Select.Option>
            ))}
          </Select>
        </Form.Item>
      </Form>
  );
}

export default Setting;