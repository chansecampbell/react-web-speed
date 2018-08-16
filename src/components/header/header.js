import React from "react";

import Nav from '../nav';

const Header = (props) => {
  this.hamburger = (
    <div className={"header__hamburger " + props.mobileHamburger} onClick={props.toggleMobileMenu}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
  this.nav = props.links.length > 0 ? <Nav {...props} /> : '';
  this.hamburgerMenu = props.links.length > 0 ? this.hamburger : '';

  return (
    <header className="header">
      <h1>React Web Speed</h1>
      { this.hamburgerMenu }
      { this.nav } 
    </header>
  );
};

export default Header;
