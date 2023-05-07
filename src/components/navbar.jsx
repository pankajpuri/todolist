import React, { Component } from "react";
import { Link, Outlet } from "react-router-dom";
class Navbar extends Component {
  state = { notification: [] };

  getStyle = () => {
    const css = "fa fa-bell";
    return this.state.notification.length === 0 ? css + "-o" : css;
  };
  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg bg-light">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              TodoList
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/history">
                    History
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="">
                    <i className={this.getStyle()} aria-hidden="true"></i>{" "}
                  </Link>
                </li>
              </ul>
              <form className="d-flex" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </nav>
        <Outlet />
      </>
    );
  }
}

export default Navbar;
