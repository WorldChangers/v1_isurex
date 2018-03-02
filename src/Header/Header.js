import React, { Component } from 'react';
import { Dropdown, DropdownMenu, DropdownItem } from 'reactstrap';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import { signOut } from '../actions/auth';
import { search } from '../actions/claim'
import deImage from '../default.png'

class Header extends Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false,
      org: '',
      firstName: '',
      search: '',
      type: 'Client'
    };
  }


  async componentWillMount(){
    const res = await localStorage.getItem('user')
    const user = JSON.parse(res)
    this.setState({org: user})
    let firstName = user.name.split(' ')
    this.setState({firstName: firstName[0]})
    
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  handleChange = ({target}) => {
    //console.log(target.name, target.value)
    this.setState({[target.name]: target.value})
  }
  onSearch = (e) => {
      e.preventDefault()
      this.props.search(this.state.search, this.state.type, this.props.history)
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
        <form className="form-inline float-left b-r-1 px-2" method='post' onSubmit={this.onSearch}>
          <i className="fa fa-search"></i>
          <input required onChange={this.handleChange} value={this.state.search} name='search' className="form-control" type="text" placeholder="Search ID or vehicle reg..."/>
           <select required value={this.state.type} onChange={this.handleChange} name="type" className="form-control input-sm" size="2">
                <option value='Client'>Client</option>
                <option value='Vehicle'>Vehicle</option>
          </select>
          <button style={{marginLeft: 10}} className='btn btn-sm'><i className="fa fa-search"></i></button>
        </form>
        <ul className="nav navbar-nav ml-auto">
          <li className="nav-item hidden-md-down">
           <p>{this.state.org.company} ({this.state.firstName})</p> 
          </li>
          <li className="nav-item dropdown">
            <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
              <a onClick={this.toggle} className="nav-link nav-pill avatar" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded={this.state.dropdownOpen}>
                <img src={deImage} className="img-avatar" alt="#"/>
              </a>

              <DropdownMenu className="dropdown-menu-right">
                <DropdownItem header className="text-center"><strong>Account</strong></DropdownItem>

                <DropdownItem><i className="fa fa-user"></i> Profile</DropdownItem>
                <DropdownItem><i className="fa fa-wrench"></i> Settings</DropdownItem>
                <DropdownItem onClick={() => signOut(history)}><i className="fa fa-lock"></i> Logout</DropdownItem>

              </DropdownMenu>
            </Dropdown>
          </li>
        </ul>
      </header>
    )
  }
}

const withRoute =  withRouter(Header)

export default connect(null, {signOut, search})(withRoute);
