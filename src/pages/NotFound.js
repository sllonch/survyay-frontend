import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NotFound extends Component {

  render() {
    return (
      <div className="not-found">
      <img className="not-found-logo" alt="Page not found logo" />
        <p className="not-found-text">Sorry but the page you are looking for does not exist.</p>
        <p className="not-found-link"><Link className="link" to={"/login"}>Go back</Link></p>
      </div>
    );
  }
}

export default NotFound;