import React, { Component } from "react";
import { withAuth } from '../providers/AuthProvider';
import { Link } from "react-router-dom";

class Survey extends Component {
  render() {
    return (
      <div className="survey">
        <p className="survey-title">{this.props.survey.title}</p>
        <Link className="link" to={`/surveys/${this.props.survey._id}`}><button className="goto-survey-btn">Vote</button></Link>
        <Link className="link" to={`/surveys/${this.props.survey._id}/results`}><button className="survey-results-btn">See Results</button></Link>
      </div>
    );
  }
}

export default withAuth(Survey);
