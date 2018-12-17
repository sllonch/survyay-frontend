import React, { Component } from 'react';
import MySurvey from './MySurvey'
import { withAuth } from '../providers/AuthProvider';

class MySurveysList extends Component {
  render() {
    if (this.props.isLoading) {
      return <div>Loading...</div>
    }
    return (
      <div className="survey-list">
        {this.props.surveys.map((survey) => {
          return (
            <div key={`id=${survey._id}`}>
              <MySurvey survey={survey} />
            </div>
          );
        })}
      </div>
    );
  }
}

export default withAuth(MySurveysList);