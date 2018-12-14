import React, { Component } from "react";
import { withAuth } from '../providers/AuthProvider';

class Survey extends Component {
  render() {
    return (
      <div className="survey">
        <p className="survey-title">{this.props.survey.title}</p>
      </div>
    );
  }
}

export default withAuth(Survey);
