import react from 'react';

function Stopwatch() {
  const [time, setTime] = react.useState(0);
  const [isStart, setIsStart] = react.useState(false);
  const updateTime = react.useRef();

  react.useEffect(() => {

    return () => {
      clearInterval(updateTime.current);
    };
  }, []);

  function start() {
    if(!isStart) {
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
    <span>
      <p>Stopwatch</p>
      <h4>{timeStyle(time)}</h4>
      <button onClick={start}>Start</button>
      <button onClick={stop}>Stop</button>
      <button onClick={reset}>Reset</button>
    </span>
  );
}

export default Stopwatch;