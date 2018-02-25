import React, { Component } from 'react';
import { Dropdown, DropdownMenu, DropdownItem } from 'reactstrap';
import { connect } from 'react-redux';
import { signOut } from '../actions/auth';
import { search } from '../actions/claim'

class Header extends Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  onSearch = ({target}) => {
      this.props.search(target.value.toLowerCase())
  }

  sidebarToggle(e) {
    e.preventDefault();
    document.body.classList.toggle('sidebar-hidden');
  }

  mobileSidebarToggle(e) {
    e.preventDefault();
    document.body.classList.toggle('sidebar-mobile-show');
  }

  asideToggle(e) {
    e.preventDefault();
    document.body.classList.toggle('aside-menu-hidden');
  }


  render() {
    const {signOut, history} = this.props
    return (
      <header className="app-header navbar">
        <button className="navbar-toggler mobile-sidebar-toggler hidden-lg-up" onClick={this.mobileSidebarToggle} type="button">&#9776;</button>
        <a className="navbar-brand" href="#"></a>
        <ul className="nav navbar-nav hidden-md-down b-r-1">
          <li className="nav-item">
            <a className="nav-link navbar-toggler sidebar-toggler" onClick={this.sidebarToggle} href="#">&#9776;</a>
          </li>
        </ul>
        <form className="form-inline float-left b-r-1 px-2 hidden-md-down">
          <i className="fa fa-search"></i>
          <input onChange={this.onSearch} value={this.props.word} className="form-control" type="text" placeholder="Search Vehicle Registration Number"/>
        </form>
        <ul className="nav navbar-nav ml-auto">
          <li className="nav-item hidden-md-down">
            <a className="nav-link nav-pill" href="#"><i className="icon-bell"></i><span className="badge badge-pill badge-danger">5</span></a>
          </li>
          <li className="nav-item dropdown">
            <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
              <a onClick={this.toggle} className="nav-link nav-pill avatar" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded={this.state.dropdownOpen}>
                <img src='#' className="img-avatar" alt="#"/>
              </a>

              <DropdownMenu className="dropdown-menu-right">
                <DropdownItem header className="text-center"><strong>Account</strong></DropdownItem>

                <DropdownItem><i className="fa fa-user"></i> Profile</DropdownItem>
                <DropdownItem><i className="fa fa-wrench"></i> Settings</DropdownItem>
                <DropdownItem onClick={() => signOut(history)}><i className="fa fa-lock"></i> Logout</DropdownItem>

              </DropdownMenu>
            </Dropdown>
          </li>
          <li className="nav-item hidden-md-down">
            
          </li>
        </ul>
      </header>
    )
  }
}

const mapStateToProps = ({clients}) => ({
  word: clients.word
})

export default connect(mapStateToProps, {signOut, search})(Header);
