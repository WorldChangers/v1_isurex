import React, { PureComponent } from 'react';
import { Menu, Dropdown, Icon } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';
// import logo from './afr.png';


class TopHeader extends PureComponent {
  state = {
    firstName: '',
    lastName: '',
  }

  componentWillMount() {
    const user = JSON.parse(localStorage.getItem('user'));

    if (user) {
      this.setState({
        firstName: user.firstName,
        lastName: user.lastName,
      });
    }
  }

  render() {
    return (
      <Menu stackable size="large">
        <Menu.Item>
          {/* <img src={logo} alt="AFRadio Logo" /> */}
          {' '}<span style={{ fontSize: 'bold', marginLeft: 10 }}>INSURE.AI</span>
        </Menu.Item>
        <Menu.Menu position="right">
          <Menu.Item>
            <Icon name="user" />
          </Menu.Item>
          <Dropdown item text={`${this.state.firstName} ${this.state.lastName}`}>
            <Dropdown.Menu>
              <Dropdown.Item>Profile</Dropdown.Item>
              <Dropdown.Item>Settings</Dropdown.Item>
              <Dropdown.Item >Logout</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Menu.Menu>
      </Menu>
    );
  }
}

export default TopHeader
