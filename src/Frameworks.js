import React from "react";

const frontEndFrameworks = [
  "React",
  "Angular",
  "Ember",
  "Knockout",
  "Backbone",
  "Vue",
];

function Frameworks() {
  const renderFrameworks = frontEndFrameworks.map((item) => (
    <li key={item + 1}>{item}</li>
  ));
  return (
    <div>
      <h3>Popular Front End JavaScript Frameworks</h3>
      <ul>{renderFrameworks}</ul>
    </div>
  );
}

export default Frameworks;
