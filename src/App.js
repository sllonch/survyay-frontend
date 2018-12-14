import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'

// import Navbar from './components/Navbar';
import Surveys from './pages/Surveys';
import NewSurvey from './pages/NewSurvey'
import Signup from './pages/Signup';
import Login from './pages/Login';
import PrivateRoute from './components/PrivateRoute';
import AnonRoute from './components/AnonRoute';
import AuthProvider from './providers/AuthProvider';
import Home from './pages/Home';
import NotFound from './pages/NotFound'
class App extends Component {
  render() {
    return (
      <AuthProvider>
        <div className="container">
          <Switch>
              <Route exact path="/" component={Home} />
              <AnonRoute path="/signup" component={Signup} />
              <AnonRoute path="/login" component={Login} />
              <PrivateRoute path="/survey" component={Surveys} />
              <PrivateRoute path="/survey/new" component={NewSurvey} />
              <Route component={NotFound} />
          </Switch>
        </div>
      </AuthProvider>
    )
  }
}

export default App;
