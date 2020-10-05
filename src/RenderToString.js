import React from "react";
import ReactDOMServer from "react-dom/server";

class RenderToString extends React.Component {
  // eslint-disable-next-line
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <p>Render to string method</p>
      </div>
    );
  }
}

ReactDOMServer.renderToString(<RenderToString />);

export default RenderToString;
