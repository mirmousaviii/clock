import React from 'react';
import DefaultLayout from '../layouts/default-layout';

function Stopwatch() {
  const [time, setTime] = React.useState(0);
  const [isStart, setIsStart] = React.useState(false);
  const updateTime = React.useRef();

  React.useEffect(() => {

    return () => {
      clearInterval(updateTime.current);
    };
  }, []);

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
      <DefaultLayout>
        <p>Stopwatch</p>
        <h4>{timeStyle(time)}</h4>
        <button onClick={start}>Start</button>
        <button onClick={stop}>Stop</button>
        <button onClick={reset}>Reset</button>
      </DefaultLayout>
  );
}

export default Stopwatch;