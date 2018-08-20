import React from "react";
import LoadableVisibility from "react-loadable-visibility/react-loadable";

const LoadedSection = LoadableVisibility({
  loader: () => import("../section"),
  loading: () => {
    return <div className="dropdown__section-loading"><h3>Loading...</h3></div>;
  },
});

const Dropdown = (props) => {
  const sectionClass = props.open ? "dropdown__section--open" : "";

  return (
    <div className="dropdown">
      <button className="dropdown__button" id={props.index} onClick={props.action}>{props.title}</button>
      <div className={"dropdown__section " + sectionClass}>
        <LoadedSection content={props.content} />
      </div>
    </div>
  );
};

export default Dropdown;
