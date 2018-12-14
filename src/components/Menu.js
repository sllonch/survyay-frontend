import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { withAuth } from '../providers/AuthProvider';

class Menu extends Component {
  render() {
    return (
      <div className="menu">
        <Link className="link" to={"/surveys"}>Survey List</Link>
        <Link className="link" to={"/surveys/new"}>New Survey</Link>
        <p onClick={this.props.logout}>Logout</p>
      </div>
    );
  }
}

export default withAuth(Menu);