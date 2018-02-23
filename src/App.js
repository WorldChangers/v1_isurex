import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './Login'
import Signup from './Signup'
//import Clients from './Dashboard/Clients'
import Dashboard from './Welcome'
//import CreateClient from './Dashboard/CreateClient'
import Home from './Home'
import AddClient  from './AddClient'
import AddVehicle from './AddVehicle'
import AddClaim from './AddClaim'

class App extends Component {
  render() {
    return (
      <div>
         <Router>
            <Switch>
              <Route exact path='/' component={Dashboard} />
              <Route exact path='/clients/new' component={AddClient} />
              <Route exact path='/vehicles/new' component={AddVehicle} />
              <Route exact path='/claims/new' component={AddClaim} />
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
