import React from "react";
import moment from "moment";

function Alarm() {
  const [hour, setHour] = React.useState(0);
  const [minute, setMinute] = React.useState(0);

  React.useEffect(() => {
    let defaultAlarmTime = moment().add(10, 'minute');
    setHour(Number(defaultAlarmTime.format("H")));
    setMinute(Number(defaultAlarmTime.format("m")));

  }, []);


  return (
    <span>
      <h2>Alarm</h2>
      <input value={hour} type="number" min={0} max={23}/>
      <input value={minute} type="number" min={0} max={59}/>
      <button>Set Alarm</button>
    </span>
  );
}

export default Alarm;