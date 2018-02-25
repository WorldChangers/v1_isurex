import React from 'react';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Login from './Login'
import Signup from './Signup'
import Dashboard from './Welcome'
//import CreateClient from './Dashboard/CreateClient'
import Home from './Home'
import AddClient  from './AddClient'
import AddVehicle from './AddVehicle'
import AddClaim from './AddClaim'

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => (
    JSON.parse(localStorage.getItem('user')) ? (
      <Component {...props} />
    ) : (
      <Redirect to={{
        pathname: '/login',
      }}
      />
    )
  )}
  />
);

const App = () => (
    <div>
         <Router>
            <Switch>
              <Route exact path='/login' component={Login} />
              <Route exact path='/signup' component={Signup} />
              <PrivateRoute exact path='/' component={Dashboard} />
              <PrivateRoute exact path='/claims' component={Dashboard} />
              <PrivateRoute exact path='/clients/new' component={AddClient} />
              <PrivateRoute exact path='/vehicles/new' component={AddVehicle} />
              <PrivateRoute exact path='/claims/new' component={AddClaim} />
            </Switch>
          </Router>
    </div>
)



export default App;