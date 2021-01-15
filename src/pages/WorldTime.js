import React from 'react';
import moment from 'moment';
import DefaultLayout from '../layouts/default-layout';

function WorldTime() {
  const [mainTime, setMainTime] = React.useState('00:00');
  const [utcTime, setUtcTime] = React.useState('00:00');
  const [customTimezoneTime, setCustomTimezoneTime] = React.useState('00:00');
  const [timezone, setTimezone] = React.useState(2);

  React.useEffect(() => {
        setMainTime(moment().format('hh:mm A'));
        setUtcTime(moment().utcOffset(0).format('hh:mm A'));
      }, [],
  );

  React.useEffect(() => {
        setCustomTimezoneTime(
            moment().utcOffset(Number(timezone)).format('hh:mm A'));
      }, [timezone],
  );

  return (
      <>
        <h2>World Time</h2>

        <h3>{mainTime} <small>(Local time)</small></h3>
        <h3>{utcTime} <small>(UTC time)</small></h3>
        <h3>{customTimezoneTime} <small>(Custom time zone)</small>
          <input type="number" min={-11} max={+14} value={timezone}
                 onChange={(e) => {
                   setTimezone(e.target.value);
                 }}/>
        </h3>
      </>
  );

}

export default WorldTime;