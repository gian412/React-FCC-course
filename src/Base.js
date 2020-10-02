import React from "react";
const MyStatelessComponent = () => {
  return (
    <div>
      <p>My stateless component</p>
    </div>
  );
};

class MyComponent extends React.Component {
  // eslint-disable-next-line
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <p>My component</p>
      </div>
    );
  }
}

class Parent extends React.Component {
  // eslint-disable-next-line
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>Parent</h3>
        <MyStatelessComponent />
        <MyComponent />
      </div>
    );
  }
}

function Base() {
  return (
    <div>
      <Parent />
    </div>
  );
}

export default Base;
