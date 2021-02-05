import React from 'react';
import ReactMoment from 'react-moment';

const ProClock = ({ format, interval, timezone }) => (
  <ReactMoment
    format={format}
    interval={interval}
    tz={timezone}
  />
);

ProClock.defaultProps = {
  format: 'HH:mm:ss',
  interval: 1000,
  timezone: '',
};

ProClock.propTypes = {
  format: String,
  interval: Number,
  timezone: String,
};

export default ProClock;
