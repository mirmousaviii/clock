import React from "react";

class Counter extends React.Component {

  // constructor(props) {
  //   super(props);
  //
  //   this.state = {
  //     number: 0,
  //     counter: 0
  //   }
  //
  //   this.plus = this.plus.bind(this);
  //   this.mines = this.mines.bind(this);
  // }
  //
  // plus() {
  //   this.setState({
  //     number: ++this.state.number,
  //     counter: ++this.state.counter
  //   });
  // }
  //
  // mines() {
  //   this.setState({
  //     number: --this.state.number,
  //     counter: ++this.state.counter
  //   });
  // }


  state = {
    number: this.props.defaultNumber || 0,
    counter: 0
  }

  plus = () => {
    this.setState({
      number: this.state.number + 1,
      counter: this.state.counter + 1
    });
  }

  mines = () => {
    this.setState({
      number: this.state.number - 1,
      counter: this.state.counter + 1
    });
  }

  render() {
    return (
      <React.Fragment>
        <h4>Counter</h4>
        <h4>Number: {this.state.number}</h4>
        <h4>Counter: {this.state.counter}</h4>
        <button onClick={this.plus}>+</button>
        <button onClick={this.mines}>-</button>
      </React.Fragment>
    );
  }
}

export default Counter;