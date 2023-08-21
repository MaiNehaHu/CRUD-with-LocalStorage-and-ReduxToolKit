import React, { useState } from "react";
import "./body.css";

import { useDispatch } from "react-redux";
import { addTask } from "../../store/slices/TasksSlice";
/**importing addTask from slice */

import List from "./List.jsx/List";

const Body = () => {
  const [textInput, setTextInput] = useState("");
  const dispatch = useDispatch();

  function addNewTask() {
    textInput === ""
      ? alert("Please write something")
      : dispatch(addTask(textInput));

    /**Updating using dispatch */
  }

  return (
    <React.Fragment>
      <div className="body-container">
        <section id="input">
          <input
            type="text"
            name="task"
            id="task"
            onInput={(e) => setTextInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                addNewTask();
              }
            }}
          />
          <button onClick={addNewTask}>Add to list</button>
        </section>

        <hr />
        <section id="list">
          <p>List of your priorities: </p>
          <List />
        </section>
      </div>
    </React.Fragment>
  );
};

export default Body;
