import React from "react";
import PropTypes from "prop-types";

const Items = (props) => {
  return <h3>Current Quantity of Items in Cart: {props.quantity}</h3>;
};

// Set the default props
Items.defaultProps = {
  quantity: 0,
};
// Set the type that prop must have to be
Items.propTypes = {
  quantity: PropTypes.number.isRequired,
};

class ShoppingCart extends React.Component {
  // eslint-disable-next-line
  constructor(props) {
    super(props);
  }
  render() {
    return <Items quantity={10} />;
  }
}

export default ShoppingCart;
