import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "../providers/AuthProvider";

class Menu extends Component {
  render() {
    return (
      <div className="menu">
        <div className="sticky-footer">
          <Link className="link" to={"/surveys"}>
            <div className="one-fourth">
              <div className="sticky-list" />
              <p>Survey list</p>
            </div>
          </Link>
          <Link className="link" to={"/surveys/new"}>
            <div className="one-fourth">
              <div className="sticky-new" />
              <p>New survey</p>
            </div>
          </Link>
          <Link className="link" to={"/profile"}>
            <div className="one-fourth">
             <div className="sticky-profile" />
              <p>My profile</p>
            </div>
          </Link>
        </div>
      </div>
    );
  }
}

/* 

<div onClick={this.props.logout} className="one-fourth">
            <div className="sticky-profile" />
            <p>My profile</p>
          </div>

*/


export default withAuth(Menu);
