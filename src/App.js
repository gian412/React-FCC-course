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
import OnlyEvensController from "./OnlyEvens";
import Style from "./Style";
import MagicEightBall from "./MagicEightBall";
import ShowOnBool from "./ShowOnBool";
import ShowOnBoolConcise from "./ShowOnBoolConcise";
import CheckUserAge from "./CheckUserAge";
import GameOfChance from "./GameOfChance";
import GateKeeper from "./GateKeeper";
import MyToDoList from "./MyToDoList";
import Frameworks from "./Frameworks";
import OnlineUsers from "./OnlineUsers";
import RenderToString from "./RenderToString";

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
        <br />
        <hr />
        <li>
          <h2>Only evens re-rendering(using shouldComponentUpdate)</h2>
          <OnlyEvensController />
        </li>
        <br />
        <hr />
        <li>
          <h2>Style the components (inline and constant)</h2>
          <Style />
        </li>
        <br />
        <hr />
        <li>
          <h2>Magic Eight Ball (js inside render before JSX)</h2>
          <MagicEightBall />
        </li>
        <br />
        <hr />
        <li>
          <h2>
            Show on bool that change with button click (js inside render before
            JSX)
          </h2>
          <ShowOnBool />
        </li>
        <br />
        <hr />
        <li>
          <h2>
            Show on bool with inline check of the condition (js inside render
            before JSX)
          </h2>
          <ShowOnBoolConcise />
        </li>
        <br />
        <hr />
        <li>
          <h2>Check User Age (ternary operator)</h2>
          <CheckUserAge />
        </li>
        <br />
        <hr />
        <li>
          <h2>Game Of Chance</h2>
          <GameOfChance />
        </li>
        <br />
        <hr />
        <li>
          <h2>Gate Keeper (change css on condition)</h2>
          <GateKeeper />
        </li>
        <br />
        <hr />
        <li>
          <h2>
            My To Do List (Use Array.map() to dinamically render elements)
          </h2>
          <MyToDoList />
        </li>
        <br />
        <hr />
        <li>
          <h2>Frameworks: (Give sibling elements an unique key attribute)</h2>
          <Frameworks />
        </li>
        <br />
        <hr />
        <li>
          <h2>
            Online Users: (Use Array.filter() with Array.map() to render with a
            criteria)
          </h2>
          <OnlineUsers />
        </li>
        <br />
        <hr />
        <li>
          <h2>
            renderToString(): (Render React on the Server with renderToString())
          </h2>
          <RenderToString />
        </li>
      </ul>
    </div>
  );
}

export default App;
