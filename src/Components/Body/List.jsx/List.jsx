import React, { useEffect, useState } from "react";
import "./list.css";

import { useSelector, useDispatch } from "react-redux";
import { removeTask } from "../../../store/slices/TasksSlice";
import { deleteAllTasks } from "../../../store/actions/action";

const List = () => {
  const dispatch = useDispatch();
  const list = useSelector((state) => {
    return state.tasks;
    /**getting from store */
  });
  
  function deleteTask(task) {
    dispatch(removeTask(task));
  }
  function emptyList() {
    dispatch(deleteAllTasks(list));
  }

  return (
    <React.Fragment>
      <ul>
        {list.map((task, i) => (
          <li className="task" key={i}>
            <p>{task}</p>
            <i className="fa fa-trash-o" onClick={() => deleteTask(task)}></i>
          </li>
        ))}
      </ul>

      <section
        id="delete-all"
        style={{
          display: !list || list.length == 0 ? "none" : "block",
        }}
      >
        <button onClick={emptyList}>Delete All</button>
      </section>
    </React.Fragment>
  );
};

export default List;
