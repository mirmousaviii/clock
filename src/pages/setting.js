import React from 'react';
import {Select, Form} from 'antd';
import momentTimezone from 'moment-timezone';
import {useTimezone, useSetTimezone} from '../context/timezone';

function Setting() {
  const timezone = useTimezone();
  const setTimezone = useSetTimezone();
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