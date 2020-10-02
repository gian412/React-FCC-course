import React from "react";
import Base from "./Base";
import Calendar from "./Calendar";
import ToDoList from "./ToDoList";
import ShoppingCart from "./ShoppingCart";
import ResetPassword from "./ResetPassword";
import ChangeName from "./ChangeName";
import Visibility from "./Visibility";
import Counter from "./Counter";

function App() {
  return (
    <div>
      <h1>React FreeCodeCamp course</h1>
      <ul>
        <hr />
        <li>
          <h2>Basic components:</h2>
          <Base />
        </li>
        <br />
        <hr />
        <li>
          <h2>Calendar:</h2>
          <Calendar />
        </li>
        <br />
        <hr />
        <li>
          <h2>To Do List:</h2>
          <ToDoList />
        </li>
        <br />
        <hr />
        <li>
          <h2>
            Shopping Cart <em>(default prop override, check propType)</em>:
          </h2>
          <ShoppingCart />
        </li>
        <br />
        <hr />
        <li>
          <h2>
            Reset Password <em>(access Props using this.props)</em>:
          </h2>
          <ResetPassword />
        </li>
        <br />
        <hr />
        <li>
          <h2>
            Change name <em>(stateful component)</em>
          </h2>
          <ChangeName />
        </li>
        <br />
        <hr />
        <li>
          <h2>
            Toggle visibility{" "}
            <em>
              (pass current state in setState in order to have the right value
              (async problem))
            </em>
          </h2>
          <Visibility />
        </li>
        <br />
        <hr />
        <li>
          <h2>Counter</h2>
          <Counter />
        </li>
      </ul>
    </div>
  );
}

export default App;
