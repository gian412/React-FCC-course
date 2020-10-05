import React from "react";

class OnlyEvens extends React.Component {
  // eslint-disable-next-line
  constructor(props) {
    super(props);
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log("Should I update?");
    // change code below this line
    return nextProps.value % 2 === 0;
    // change code above this line
  }
  componentDidUpdate() {
    console.log("Component re-rendered.");
  }
  render() {
    return <h4>{this.props.value}</h4>;
  }
}

class OnlyEvensController extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
    };
    this.addValue = this.addValue.bind(this);
  }
  addValue() {
    this.setState((state) => ({
      value: state.value + 1,
    }));
  }
  render() {
    return (
      <div>
        <button onClick={this.addValue}>Add</button>
        <OnlyEvens value={this.state.value} />
      </div>
    );
  }
}

export default OnlyEvensController;
