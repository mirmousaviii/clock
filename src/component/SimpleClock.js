import react from 'react';

function SimpleClock() {
  const [time, setTime] = react.useState('00:00:00');

  react.useEffect(
    () => {
      setInterval(() => {
        let date = new Date();
        setTime(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
      }, 1000)
    });

  return (
    <h4>{time}</h4>
  );
}

export default SimpleClock;