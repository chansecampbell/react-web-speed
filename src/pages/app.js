import React from "react";
import { Route } from "react-router-dom"
import Loadable from 'react-loadable';

import Header from "../components/header";

function loadingComponent({ error }) {
  if (error) {
    return 'Error!';
  } else {
    return <div className="app__loading"><h3>Loading...</h3></div>;
  }
}

const PageHome = Loadable({
  loader: () => import("./home" /* webpackChunkName: "home" */),
  loading: loadingComponent
});

const PageGallery = Loadable({
  loader: () => import("./gallery" /* webpackChunkName: "gallery" */),
  loading: loadingComponent
});

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      mobileMenuOpen: false
    };

    this.headerLinks = [
      {
        text: "Home",
        url: "/"
      },
      {
        text: "Gallery",
        url: "/gallery"
      }
    ]

    this.toggleMobileMenu = this.toggleMobileMenu.bind(this);
  }

  toggleMobileMenu() {
    this.setState({
      mobileMenuOpen: !this.state.mobileMenuOpen
    });
  }

  render() {
    let mobileHamburger = this.state.mobileMenuOpen ? "header__hamburger--open" : "";
    let mobileNav = this.state.mobileMenuOpen ? "nav--open" : "";

    return (
      <div className="app">
        <Header
          links={this.headerLinks}
          mobileHamburger={mobileHamburger}
          mobileNav={mobileNav}
          toggleMobileMenu={this.toggleMobileMenu} />
        <Route path="/" exact component={PageHome} />
        <Route path="/gallery" component={PageGallery} />
      </div>
    );
  }
};

export default App;
