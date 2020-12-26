import React from 'react';
import Moment from 'react-moment';


function ProClock(props) {

  return (
    <span>
      <h4>
        <Moment
          format={props.format || "HH:mm:ss"}
          interval={props.interval || 1000}
        />
      </h4>
    </span>

  );
}

export default ProClock;