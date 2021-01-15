import React from 'react';
import ReactMoment from 'react-moment';

function ProClock(props) {

  return (
      <ReactMoment
          format={props.format || 'HH:mm:ss'}
          interval={props.interval || 1000}
      />
  );
}

export default ProClock;