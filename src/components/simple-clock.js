import React from 'react';

function SimpleClock(props) {
  const [time, setTime] = React.useState(getTime());

  React.useEffect(
    () => {
      let updateTime = setInterval(() => {
        setTime(getTime());
      }, 1000)

      return () => {
        clearInterval(updateTime);
      }
    }, []);

  function getTime() {
    let date = new Date();
    return `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
  }

  return (
    <p>{props.label ? (props.label + ' ') : ''}{time}</p>
  );
}

export default SimpleClock;