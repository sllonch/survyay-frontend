import React, { Component } from 'react';
import Menu from '../components/Menu'
import { withAuth } from '../providers/AuthProvider';

class Results extends Component {

  render() {
    return (
      <div className="results-page">
        <p>Results page</p>
        <Menu />
      </div>
    );
  }
}

export default withAuth(Results);