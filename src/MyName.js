import React from "react";

class MyName extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Gianluca",
    };
  }
  render() {
    return (
      <div>
        <Navbar name={this.state.name} />
      </div>
    );
  }
}

class Navbar extends React.Component {
  // eslint-disable-next-line
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h4>Hello, my name is: {this.props.name}</h4>
      </div>
    );
  }
}

export default MyName;
