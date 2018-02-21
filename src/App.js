import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './Login'
import Signup from './Signup'
//import Clients from './Dashboard/Clients'
import Dashboard from './Welcome'
//import CreateClient from './Dashboard/CreateClient'
import Home from './Home'

class App extends Component {
  render() {
    return (
      <div>
         <Router>
            <Switch>
              <Route exact path='/' component={Dashboard} />
              <Route exact path='/login' component={Login} />
              <Route exact path='/signup' component={Signup} />
              {/* <Route exact path='/clients/new' component={CreateClient} /> */}
            </Switch>
          </Router>
      </div>
    );
  }
}

export default App;
