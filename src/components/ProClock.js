import React from 'react';
import ReactMoment from 'react-moment';


function ProClock(props) {

  return (
    <span>
      <h4>
        <ReactMoment
          format={props.format || "HH:mm:ss"}
          interval={props.interval || 1000}
        />
      </h4>
    </span>

  );
}

export default ProClock;