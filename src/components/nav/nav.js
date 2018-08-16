import React from "react";
import { Link } from "react-router-dom";

const Nav = (props) => {
  this.links = [];

  props.links.forEach((link, index) => {
    this.links.push(
      <Link to={link.url} onClick={props.toggleMobileMenu} key={index}>
        { link.text }
      </Link>);
  });

  return (
    <nav className={"nav " + props.mobileNav}>
      { this.links }
    </nav>
  );
};

export default Nav;