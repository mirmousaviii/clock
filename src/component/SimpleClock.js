import react from 'react';

function SimpleClock() {
  const [time, setTime] = react.useState(getTime());

  react.useEffect(
    () => {
      let updateTime = setInterval(() => {
        setTime(getTime());
      }, 1000)

      return () => {
        clearInterval(updateTime);
      }
    });

  function getTime() {
    let date = new Date();
    return `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
  }

  return (
    <h4>{time}</h4>
  );
}

export default SimpleClock;