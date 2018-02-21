import React, { PureComponent } from 'react';
import { Menu, Divider, List, Grid, Label } from 'semantic-ui-react';
import { Link } from 'react-router-dom';


class Sidebar extends PureComponent {
    state = { activeItem: 'Home' };


    handleItemClick = (e, { name }) => {
      this.setState({ activeItem: name });
    }
    render() {
      const { activeItem } = this.state;
      return (
        <div>
          <Menu pointing fluid stackable vertical>
            <Menu.Item header name="Dashboard" />
            <Menu.Item as={Link} to="/welcome" name="Clients" active={activeItem === 'Clients'} onClick={this.handleItemClick} />
            <Menu.Item as={Link} to="/analytics" name="Analytics"active={activeItem === 'Analytics'} onClick={this.handleItemClick} />
            <Menu.Item as={Link} to="/reports" name="Reports" active={activeItem === 'Reports'} onClick={this.handleItemClick} />
            <Menu.Item as={Link} to="/settings" name="Settings" active={activeItem === 'Settings'} onClick={this.handleItemClick} />
            <Menu.Item as={Link} to="/predict" name="Predictions" active={activeItem === 'Predictions'} onClick={this.handleItemClick} />
            <Menu.Item as={Link} to="/claims" active={activeItem === 'Claims'} onClick={this.handleItemClick} >
              <Label color="grey">1</Label>
            Claims
            </Menu.Item>
            <Menu.Item as={Link} to="/feedback" active={activeItem === 'Feedback'} onClick={this.handleItemClick} >
              <Label color="teal">45</Label>
            Feedback
            </Menu.Item>
          </Menu>
          <Divider hidden />
          <Grid >
            <List size="tiny" style={{ marginLeft: '16px', marginTop: '10px' }}>
              <List.Item as="a" >Support</List.Item>
              <List.Item as="a" >Privacy Policy</List.Item>
              <List.Item as="a">Terms &amp; Conditions</List.Item>
              <List.Item as="a">Cookies</List.Item>
              <List.Item as="a">About Us</List.Item>
              <List.Item as="a">Contact Us</List.Item>
              <List.Item as="a" disabled>Copyright 2018</List.Item>
            </List>
          </Grid>
        </div>
      );
    }
}

export default Sidebar;
