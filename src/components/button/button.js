import React from "react";
import { Link } from "react-router-dom";

const Button = (props) => {
  this.color = () => {
    switch(props.color) {
      case 'blue':
      return 'button--blue';
      case 'blue2':
      return 'button--blue2';
      case 'white':
      return 'button--white';
      case 'white2':
      return 'button--white2';
      default:
      return 'button--white';
    }
  };

  return (
    <div className={"button " + this.color()}>
      <div className="button__wrapper">
        <Link to={props.url}>{props.text}</Link>
      </div>
    </div>
  );
};

export default Button;
