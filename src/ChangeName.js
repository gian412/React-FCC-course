import React from "react";

class ChangeName extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Initial State",
    };
    //! Bind 'this' to handle click in order to use 'this' inside the handleClick ìfunction
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({
      name: "React Rocks!",
    });
  }
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Click Me</button>
        <h3>{this.state.name}</h3>
      </div>
    );
  }
}

export default ChangeName;
