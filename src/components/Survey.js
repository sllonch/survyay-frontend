import React, { Component } from "react";
import { withAuth } from '../providers/AuthProvider';
import { Link } from "react-router-dom";

class Survey extends Component {
  render() {
    const userId = this.props.user._id;
    const users = this.props.survey.participants.map(participant => participant.participant)
    const indexParticipant = users.indexOf(userId)
    return (
      <div className="survey">
        <p className="survey-list-title">{this.props.survey.title}</p>
        {!this.props.survey.participants[indexParticipant].hasVoted ?  <Link className="link" to={`/surveys/${this.props.survey._id}`}><button className="goto-survey-btn">Vote</button></Link> : <p className="has-voted">You already voted ✓</p>}    
        <Link className="link" to={`/surveys/${this.props.survey._id}/results`}><button className="survey-results-btn">See Results</button></Link>
      </div>
    );
  }
}

export default withAuth(Survey);
