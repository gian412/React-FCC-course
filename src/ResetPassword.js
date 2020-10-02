import React from "react";

class ReturnTempPassword extends React.Component {
  // eslint-disable-next-line
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <p>
          Your temporary password is: <strong>{this.props.tempPassword}</strong>
        </p>
      </div>
    );
  }
}

class ResetPassword extends React.Component {
  // eslint-disable-next-line
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>Reset Password</h3>
        <h4>We've generated a new temporary password for you.</h4>
        <h4>Please reset this password from your account setting ASAP.</h4>
        <ReturnTempPassword tempPassword={"tempPassword"} />
      </div>
    );
  }
}

export default ResetPassword;
