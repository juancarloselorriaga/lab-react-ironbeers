import React from "react";
import { Link } from "react-router-dom";

import "./navbar.styles.scss";

class Navbar extends React.Component {
  constructor() {
    super();

    this.state = { isMenuOpen: false };
  }

  handleMenuClick = () => {
    this.setState({ isMenuOpen: false })
  }

  handleMenu = () => {
    this.setState(
      (prevState, prevProps) => {
        return { isMenuOpen: prevState.isMenuOpen };
      },
      async () => {
        await this.setState({ isMenuOpen: !this.state.isMenuOpen });
      }
    );
  };

  render() {
    const { isMenuOpen } = this.state;

    return (
      <div>
        <nav
          className="navbar is-primary"
          role="navigation"
          aria-label="main navigation"
        >
          <div className="navbar-brand">
            <a className="navbar-item" href="https://bulma.io">
              <img
                src="https://cdn.imgbin.com/23/21/25/imgbin-beer-drawing-beer-cUA1sRVy6yvYDgGah2i1NNidp.jpg"
                width="28"
                height="28"
                alt="iron-beer"
              />
            </a>

            <a
              role="button"
              className="navbar-burger burger"
              aria-label="menu"
              aria-expanded="false"
              data-target="ironNavbar"
              onClick={this.handleMenu}
            >
              <span aria-hidden='true'></span>
              <span aria-hidden='true'></span>
              <span aria-hidden='true'></span>
            </a>
          </div>
          <div className={`${isMenuOpen ? 'is-active' : ''} navbar-menu`}>
            <div className="navbar is-primary " id="ironNavbar">
              <Link to="/" className="navbar-item has-text-white" onClick={this.handleMenuClick}>
                Homepage
              </Link>
              <Link to="/beers" className="navbar-item has-text-white" onClick={this.handleMenuClick}>
                Beers
              </Link>
              <Link to="/new-beer" className="navbar-item has-text-white" onClick={this.handleMenuClick}>
                New Beer
              </Link>
              <Link to="/random-beer" className="navbar-item has-text-white" onClick={this.handleMenuClick}>
                Random Beer
              </Link>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
