import React from 'react';
import ProClock from '../components/pro-clock';
import {TimezoneContext} from '../context';

function CurrentTime() {
  let Timezone = React.useContext(TimezoneContext);

  return (
      <>
        <span className='full-size'>
          <ProClock/>
        </span>
        <p className="timezone">Timezone: {Timezone}</p>
      </>
  );
}

export default CurrentTime;