import React from "react";
import moment from "moment";
import DefaultLayout from '../layouts/default-layout';

function Alarm() {
  const [hour, setHour] = React.useState(0);
  const [minute, setMinute] = React.useState(0);

  React.useEffect(() => {
    let defaultAlarmTime = moment().add(10, 'minute');
    setHour(Number(defaultAlarmTime.format("H")));
    setMinute(Number(defaultAlarmTime.format("m")));

  }, []);


  return (
      <>
        <h2>Alarm</h2>
        <input value={hour} type="number" min={0} max={23}/>
        <input value={minute} type="number" min={0} max={59}/>
        <button>Set Alarm</button>
      </>
  );
}

export default Alarm;