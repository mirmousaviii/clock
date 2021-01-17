import React from 'react';
import {Button, Space} from 'antd';
import {CaretRightOutlined, PauseOutlined, UndoOutlined} from '@ant-design/icons';

function Stopwatch() {
  const [time, setTime] = React.useState(0);
  const [isStart, setIsStart] = React.useState(false);
  const updateTime = React.useRef();

  React.useEffect(() => {

    return () => {
      clearInterval(updateTime.current);
    };
  }, []);

  function toggle() {
    if (isStart) {
      stop();
    } else {
      start();
    }
  }

  function start() {
    if (!isStart) {
      updateTime.current = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 10);

      setIsStart(true);
    }
  }

  function stop() {
    clearInterval(updateTime.current);
    setIsStart(false);
  }

  function reset() {
    stop();
    setTime(0);
  }

  function timeStyle(time) {
    time = time.toString();

    while (time.length < 4) {
      time = '0' + time;
    }

    time = time.slice(0, time.length - 2) +
        '.' +
        time.toString().slice(time.length - 2, time.length);

    return time;
  }

  return (
      <>
        <div className='full-size'>
          {timeStyle(time)}
        </div>

        <Space size={-1} className='controller'>
          <Button
              size="large"
              icon={isStart ? <PauseOutlined/> : <CaretRightOutlined/> }
              type="primary"
              onClick={toggle}
          />
          <Button
              size="large"
              type="primary"
              danger
              icon={<UndoOutlined />}
              onClick={reset}
          />
        </Space>
      </>
  );
}

export default Stopwatch;