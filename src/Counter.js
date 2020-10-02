import React from "react";

class Counter extends React.Component {
  constructor(props) {
    // eslint-disable-next-line
    super(props);
    this.state = {
      count: 0,
    };
    this.decrement = this.decrement.bind(this);
    this.increment = this.increment.bind(this);
    this.reset = this.reset.bind(this);
  }

  decrement() {
    this.setState((state) => ({ count: --state.count }));
  }

  increment() {
    this.setState((state) => ({ count: ++state.count }));
  }

  reset() {
    this.setState({ count: 0 });
  }

  render() {
    return (
      <div>
        <button className="dec" onClick={this.decrement}>
          Decrement
        </button>
        <button className="res" onClick={this.reset}>
          Reset
        </button>
        <button className="inc" onClick={this.increment}>
          Increment
        </button>
        <h3>Current Count: {this.state.count}</h3>
      </div>
    );
  }
}

export default Counter;
