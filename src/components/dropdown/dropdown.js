import React from "react";

const Dropdown = (props) => {
  const sectionClass = props.open ? "dropdown__section--open" : "";

  return (
    <div className="dropdown">
      <button className="dropdown__button" id={props.index} onClick={props.action}>{props.title}</button>
      <div className={"dropdown__section " + sectionClass}>
        <p>{props.content}</p>
      </div>
    </div>
  );
};

export default Dropdown;
