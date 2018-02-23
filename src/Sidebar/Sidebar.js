import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Sidebar extends Component {

  handleClick(e) {
    e.preventDefault();
    e.target.parentElement.classList.toggle('open');
  }

  activeRoute(routeName) {
    return this.props.location.pathname.indexOf(routeName) > -1 ? 'nav-item nav-dropdown open' : 'nav-item nav-dropdown';
  }

  // secondLevelActive(routeName) {
  //   return this.props.location.pathname.indexOf(routeName) > -1 ? "nav nav-second-level collapse in" : "nav nav-second-level collapse";
  // }

  render() {
    return (
      <div className="sidebar">
        <nav className="sidebar-nav">
          <ul className="nav">
            <li className="nav-title text-center">
              <span>Claims</span>
            </li>
            <li className={this.activeRoute("/welcome")}>
              <a className="nav-link nav-dropdown-toggle" href="#" onClick={this.handleClick.bind(this)}><i className="icon-puzzle"></i> Claims</a>
              <ul className="nav-dropdown-items">
                <li className="nav-item">
                  <Link to={'#'} className="nav-link" activeClassName="active"><i className="icon-puzzle"></i> View</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/clients/new'} className="nav-link" activeClassName="active"><i className="icon-puzzle"></i> Add</Link>
                </li>
              </ul>
            </li>
            <li className={this.activeRoute("/analytics")}>
              <a className="nav-link nav-dropdown-toggle" href="#" onClick={this.handleClick.bind(this)}><i className="icon-note"></i> Analytics</a>
              <ul className="nav-dropdown-items">
                <li className="nav-item">
                  <Link to={'#'} className="nav-link" activeClassName="active"><i className="icon-note"></i>View</Link>
                </li>
                <li className="nav-item">
                  <Link to={'#'} className="nav-link" activeClassName="active"><i className="icon-note"></i>Add</Link>
                </li>
              </ul>
            </li>
            <li className={this.activeRoute("/reports")}>
              <a className="nav-link nav-dropdown-toggle" href="#" onClick={this.handleClick.bind(this)}><i className="icon-star"></i> Reports</a>
              <ul className="nav-dropdown-items">
                <li className="nav-item">
                  <Link to={'#'} className="nav-link" activeClassName="active"><i className="icon-star"></i>View</Link>
                </li>
                <li className="nav-item">
                  <Link to={'#'} className="nav-link" activeClassName="active"><i className="icon-star"></i>Generate</Link>
                </li>
              </ul>
            </li>
            <li className="divider"></li>
            <li className="nav-title text-center">
              <span>Predictions</span>
            </li>
            <li className={this.activeRoute("/predictions")}>
              <a className="nav-link nav-dropdown-toggle" href="#" onClick={this.handleClick.bind(this)}><i className="icon-energy"></i> Predictions</a>
              <ul className="nav-dropdown-items">
                <li className="nav-item">
                  <Link to={'#'} className="nav-link" activeClassName="active"><i className="icon-cursor"></i>View</Link>
                </li>
                <li className="nav-item">
                  <Link to={'#'} className="nav-link" activeClassName="active"><i className="fa fa-spinner"></i>Add</Link>
                </li>
              </ul>
            </li>
            <li className="divider"></li>
            <li className="nav-title text-center">
              <span>Settings</span>
            </li>
            <li className="nav-item">
              <Link to={'#'} className="nav-link" activeClassName="active"><i className="icon-calculator"></i>Settings</Link>
            </li>
          </ul>
        </nav>
      </div>
    )
  }
}

export default Sidebar;
