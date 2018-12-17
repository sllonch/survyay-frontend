import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'

// import Navbar from './components/Navbar';
import Surveys from './pages/Surveys';
import MySurveys from './pages/MySurveys';
import Survey from './pages/Survey';
import Results from './pages/Results'
import New from './pages/New';
import Profile from './pages/Profile';
import EditProfile from './pages/EditProfile';
import Signup from './pages/Signup';
import Login from './pages/Login';
import PrivateRoute from './components/PrivateRoute';
import AnonRoute from './components/AnonRoute';
import AuthProvider from './providers/AuthProvider';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

class App extends Component {
  render() {
    return (
      <AuthProvider>
        <div className="container">
          <Switch>
              <Route exact path="/" component={Home} />
              <AnonRoute path="/signup" component={Signup} />
              <AnonRoute path="/login" component={Login} />
              <PrivateRoute exact path="/profile" component={Profile} />
              <PrivateRoute path="/profile/edit" component={EditProfile} />
              <PrivateRoute path="/my-surveys" component={MySurveys} />
              <PrivateRoute exact path="/surveys" component={Surveys} />
              <PrivateRoute path="/surveys/new" component={New} />
              <PrivateRoute exact path="/surveys/:id" component={Survey} />
              <PrivateRoute path="/surveys/:id/results" component={Results} />
              <Route component={NotFound} />
          </Switch>
        </div>
      </AuthProvider>
    )
  }
}

export default App;
