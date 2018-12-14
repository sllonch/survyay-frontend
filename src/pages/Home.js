import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withAuth } from '../providers/AuthProvider';

import '../stylesheets/style.css';

class Home extends Component {

  renderIsLoggedIn = () => {
    return <div>
      <Link to='/survey'><button className="survey-btn">Go to HOME</button></Link>
      <button className="logout-btn"><p onClick={this.props.logout}>Logout</p></button>
      </div>
  }

  renderIsNotLoggedIn = () => {
    return <div>
      <Link to='/login'><button className="login-btn">LOGIN</button></Link>
      <p className="signup-helper">New to Survyay?</p>
      <Link to='/signup'><button className="signup-btn">SIGNUP</button></Link>
    </div>
  }

  render() {
    return (
      <div className="home">
      <img className="logo" alt="Survyay logo" />
        { this.props.isLogged ? this.renderIsLoggedIn() : this.renderIsNotLoggedIn() }
      </div>
    );
  }
}

export default withAuth(Home);