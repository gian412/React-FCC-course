import React from "react";

class ControlledForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      submit: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({
      text: event.target.value,
    });
  }
  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      submit: this.state.text,
    });
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          {/* change code below this line */}
          <input
            type="text"
            value={this.state.text}
            onChange={this.handleChange}></input>
          {/* change code above this line */}
          <button type="submit">Submit!</button>
        </form>
        {/* change code below this line */}
        <h4>{this.state.submit}</h4>
        {/* change code above this line */}
      </div>
    );
  }
}

export default ControlledForm;
