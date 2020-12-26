import React from "react";
import moment from "moment"

function Timer() {
  const [minute, setMinute] = React.useState(0);
  const [second, setSecond] = React.useState(0);
  const [time, setTime] = React.useState("00:00:00");
  const countDownInterval = React.useRef();

  function addTime() {
    let newTime = moment()
      .startOf('day')
      .add(minute, "minutes")
      .add(second, "seconds")
      .format("HH:mm:ss");
    setTime(newTime);
  }

  function start() {
    countDownInterval.current = setInterval(() => {
      setTime(
        (prev)=> {
          if(prev === "00:00:00") {
            clearInterval(countDownInterval.current);
            return "TIME OUT";
          }
          return moment(prev, 'HH:mm:ss').subtract(1, 'seconds').format('HH:mm:ss')
        }
      );
    }, 1000);
  }

  function pause() {
    clearInterval(countDownInterval.current);
  }

  return (
    <span>
      <p>Timer</p>
      <label>
        Minute:
        <input placeholder='00' type='number' min='0' max='99' value={minute}
               onChange={(e) => setMinute(e.target.value)}/>
      </label>
      <label>
        Second:
        <input placeholder='00' type='number' min='0' max='59' value={second}
               onChange={(e) => setSecond(e.target.value)}/>
      </label>
      <button onClick={addTime}>Add Time</button>

      {/*<h4>{minute}m {second}s</h4>*/}
      <h4>{time}</h4>
      <button onClick={start}>Start</button>
      <button onClick={pause}>Pause</button>

    </span>
  );
}

export default Timer;