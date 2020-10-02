import React from "react";

const List = (props) => {
  return <p>{props.tasks.join(", ")}</p>;
};

function ToDoList() {
  return (
    <div>
      <h3>To Do List</h3>
      <h4>Today</h4>
      <List tasks={["Learn", "React", "From"]} />
      <h4>Tomorrow</h4>
      <List tasks={["Free", "Code", "Camp"]} />
    </div>
  );
}

export default ToDoList;
