import {useEffect, useState} from 'react';

function Test() {
  const [count, setCount] = useState(0);

  // React.useEffect(() => {
  //   console.log(count);
  //
  //   return function() {
  //     return (
  //         console.log('PLEASE STOP!')
  //     );
  //   };
  // }, [count]);

  useEffect(() => {
    // This gets called after every render, by default
    // (the first one, and every one after that)
    console.log('render!');

    // If you want to implement componentWillUnmount,
    // return a function from here, and React will call
    // it prior to unmounting.
    return () => console.log('unmounting...');
  })


  function plus() {
    setCount(count + 1);
  }

  function mines() {
    setCount(count - 1);
  }

  const change = (num) => {
    setCount(count + num);
  };

  return (
      <>
        <h1>Test</h1>
        <h4>Count: {count}</h4>
        <button onClick={plus}>+</button>
        <button onClick={mines}>-</button>
        <br/>
        <button onClick={() => change(+2)}>++</button>
        <button onClick={() => change(-2)}>--</button>
      </>
  );
}

export default Test;
/*
import * as React from 'react';

class Test extends React.Component {
  state = {
    count: 0,
  };

  constructor() {
    super();
    this.plus = this.plus.bind(this);
    this.mines = this.mines.bind(this);
  }

  plus() {
    this.setState({
      count: this.state.count + 1,
    });
  }

  mines() {
    this.setState({
      count: this.state.count - 1,
    });
  }

  change = (num) => {
    this.setState({
      count: this.state.count + num,
    });
  }

  render() {
    return (
        <>
          <h1>Test</h1>
          <h4>Count: {this.state.count}</h4>
          <button onClick={this.plus}>+</button>
          <button onClick={this.mines}>-</button>
          <br/>
          <button onClick={() => this.change(+2)}>++</button>
          <button onClick={() => this.change(-2)}>--</button>
        </>
    );
  }

}

export default Test;

*/
