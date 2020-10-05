import React from "react";

const styleCostant = {
  color: "purple",
  fontSize: 13,
  border: "12px solid purple",
};

class Style extends React.Component {
  // eslint-disable-next-line
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h4 style={{ color: "red", fontSize: 14 }}>Style with inline method</h4>
        <h4 style={styleCostant}>Style with a costant</h4>
      </div>
    );
  }
}

export default Style;
