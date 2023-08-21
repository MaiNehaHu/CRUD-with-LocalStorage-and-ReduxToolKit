import React from "react";
import "./header.css";
import { useSelector } from "react-redux";

const Header = () => {
  const list = useSelector((state) => {
    return state.tasks;
    /**getting from store */
  });

  return (
    <React.Fragment>
      <div className="header">
        <h1>
          <span id="count">{list.length} </span>
          <span>Priorities to do</span>
        </h1>
      </div>
    </React.Fragment>
  );
};

export default Header;
