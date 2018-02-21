import React, { PureComponent } from 'react';
import { Grid } from 'semantic-ui-react';
import Container from '../utils/container';
import Header from './Header';
import Sidebar from './Sidebar';

class Dashboard extends PureComponent {
  state ={
    sidebar: true,
  }

  componentWillMount() {
    if (this.props.sidebar === false) {
      this.setState({ sidebar: !this.state.sidebar });
    }
  }

  render() {
    return (
      <div>
        <Header />
        <Container>
          <Grid>
            <Grid.Row>
              {this.state.sidebar &&
              <Grid.Column width={3}>
                <Sidebar />
              </Grid.Column>
              }
              <Grid.Column width={this.state.sidebar ? 13 : 16}>
                {this.props.children}
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </div>
    );
  }
}

export default Dashboard;
