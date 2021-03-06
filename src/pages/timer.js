import React from 'react';
import {TimePicker, Button, Space} from 'antd';
import moment from 'moment';
import {
  CaretRightOutlined,
  PauseOutlined,
} from '@ant-design/icons';

function Timer() {
  const [time, setTime] = React.useState('00:00:00');
  const [isStart, setIsStart ] = React.useState(false);
  const countDownInterval = React.useRef();

  function onChange(time, timeString) {
    if (timeString === '') {
      timeString = '00:00:00';
    }
    setTime(timeString);
  }

  function start() {
    setIsStart(true);
    countDownInterval.current = setInterval(() => {
      setTime(
          (prev) => {
            if (prev === '00:00:00') {
              clearInterval(countDownInterval.current);
              setIsStart(false);
              return '00:00:00';
            }
            return moment(prev, 'HH:mm:ss')
            .subtract(1, 'seconds')
            .format('HH:mm:ss');
          },
      );
    }, 1000);
  }

  function pause() {
    setIsStart(false);
    clearInterval(countDownInterval.current);
  }

  return (
      <>
        <div className='full-size'>
          {time}
        </div>

        <Space size={-1} className='controller'>
          <TimePicker
              size="large"
              placeholder="Add time"
              showNow={false}
              onChange={onChange}
          />
          <Button
              size="large"
              type="primary"
              icon={ isStart ? <PauseOutlined/> : <CaretRightOutlined/>}
              onClick={isStart ? pause : start}
              danger={isStart}
          />
        </Space>

      </>
  );
}

export default Timer;