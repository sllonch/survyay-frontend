import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withAuth } from '../providers/AuthProvider';
class Navbar extends Component {

  renderIsLoggedIn = () => {
    return <div>
      <p>username: {this.props.user.username}</p>
      <p onClick={this.props.logout}>Logout</p>
    </div>
  }

  renderIsNotLoggedIn = () => {
    return <div>
      <button><Link to='/login'>Login</Link></button>
      <button><Link to='/signup'>Signup</Link></button>
    </div>
  }

  render() {
    return (
      <div>
        { this.props.isLogged ? this.renderIsLoggedIn() : this.renderIsNotLoggedIn() }
      </div>
    )
  }
}

export default withAuth(Navbar);