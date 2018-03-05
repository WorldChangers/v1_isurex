import React from 'react';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Login from './Login'
import Signup from './Signup'
import Claims from './Claims'
import Search from './Search'
import GRAPH from './GRAPH'
import Home from './Home'
import AddClient  from './AddClient'
import AddVehicle from './AddVehicle'
import AddClaim from './AddClaim'
import EditClaim from './editClaim'
import Error from './ErrorPage'

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
              <PrivateRoute exact path='/' component={GRAPH} />
              <PrivateRoute exact path='/search' component={Search} />
              <PrivateRoute exact path='/claims' component={Claims} />
              <PrivateRoute exact path='/claims/edit/:id' component={EditClaim} />
              <PrivateRoute exact path='/clients/new' component={AddClient} />
              <PrivateRoute exact path='/vehicles/new' component={AddVehicle} />
              <PrivateRoute exact path='/claims/new' component={AddClaim} />
              <PrivateRoute component={Error} />
            </Switch>
          </Router>
    </div>
)



export default App;