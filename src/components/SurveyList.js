import React, { Component } from 'react';
import Survey from './Survey'
import { withAuth } from '../providers/AuthProvider';

class UserList extends Component {
  render() {
    if (this.props.isLoading) {
      return <div>Loading...</div>
    }
    return (
      <div className="survey-list">
        {this.props.surveys.map((survey) => {
          return (
            <div key={`id=${survey._id}`}>
              <Survey survey={survey} />
            </div>
          );
        })}
      </div>
    );
  }
}

export default withAuth(UserList);