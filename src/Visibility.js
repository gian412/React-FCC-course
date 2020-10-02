import React from "react";

class Visibility extends React.Component {
  constructor(props) {
    // eslint-disable-next-line
    super(props);
    this.state = {
      visibility: false,
    };
    this.toggleVisibility = this.toggleVisibility.bind(this);
  }

  toggleVisibility() {
    this.setState((state) => ({
      visibility: !state.visibility,
    }));
  }
  render() {
    if (this.state.visibility) {
      return (
        <div>
          <button onClick={this.toggleVisibility}>Click me</button>
          <h3>Now you see me!</h3>
        </div>
      );
    } else {
      return (
        <div>
          <button onClick={this.toggleVisibility}>Click me</button>
        </div>
      );
    }
  }
}

export default Visibility;
