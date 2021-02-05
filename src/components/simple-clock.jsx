import React from 'react';

const SimpleClock = ({ label }) => {
  function getTime() {
    const date = new Date();
    return `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
  }

  const [time, setTime] = React.useState(getTime());

  React.useEffect(
    () => {
      const updateTime = setInterval(() => {
        setTime(getTime());
      }, 1000);

      return () => {
        clearInterval(updateTime);
      };
    }, [],
  );

  return (
    <p>
      {label && (`${label} `)}
      {time}
    </p>
  );
};

SimpleClock.defaultProps = {
  label: '',
};

SimpleClock.propTypes = {
  label: String,
};

export default SimpleClock;
