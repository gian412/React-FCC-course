import React from "react";
import Base from "./Base";
import Calendar from "./Calendar";
import ToDoList from "./ToDoList";
import ShoppingCart from "./ShoppingCart";
import ResetPassword from "./ResetPassword";
import ChangeName from "./ChangeName";
import Visibility from "./Visibility";
import Counter from "./Counter";
import ControlledInput from "./ControlledInput";
import ControlledForm from "./ControlledForm";
import MyName from "./MyName";
import MyInput from "./MyInput";
import EventListener from "./EventListener";

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
        <br />
        <hr />
        <li>
          <h2>Controlled input</h2>
          <ControlledInput />
        </li>
        <br />
        <hr />
        <li>
          <h2>Controlled form</h2>
          <ControlledForm />
        </li>
        <br />
        <hr />
        <li>
          <h2>
            My name (from stateful component to stateless component through
            props)
          </h2>
          <MyName />
        </li>
        <br />
        <hr />
        <li>
          <h2>My Input (passing a callback as a props)</h2>
          <MyInput />
        </li>
        <br />
        <hr />
        <li>
          <h2>Read enter key (Using lifecicle and event listeners)</h2>
          <EventListener />
        </li>
      </ul>
    </div>
  );
}

export default App;
