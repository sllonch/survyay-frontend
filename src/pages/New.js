import React, { Component } from 'react';
import Menu from '../components/Menu'
import { withAuth } from '../providers/AuthProvider';

class NewSurvey extends Component {

  render() {
    return (
      <div className="new-survey">
        <p>New Survey page</p>
        <Menu />
      </div>
    );
  }
}

export default withAuth(NewSurvey);