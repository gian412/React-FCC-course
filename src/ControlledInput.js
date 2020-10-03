import React from "react";

class ControlledInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
    };
  }

  handleChange(event) {
    this.setState({ input: event.target.value });
  }

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.input}
          onChange={this.handleChange.bind(this)}></input>
        <h4>Controlled input:</h4>
        <p>{this.state.input}</p>
      </div>
    );
  }
}

export default ControlledInput;
