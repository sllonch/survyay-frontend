import React, { Component } from 'react';
import Menu from '../components/Menu'
import { withAuth } from '../providers/AuthProvider';
import { Link } from "react-router-dom";

class EditProfile extends Component {

  render() {
    return (
      <div className="survey-list">
        <h1>Your Profile</h1>
        <h2>Name: {this.props.user.name}</h2>
        <h2>Email: {this.props.user.email}</h2>
        <Link className="link" to="/profile/edit"><button class="goto-survey-btn">Edit Profile</button></Link>
        <Link className="link" to="/my-surveys"><button class="goto-survey-btn">My Surveys</button></Link>
        <Menu />
      </div>
    )
  }
}

export default withAuth(EditProfile);
