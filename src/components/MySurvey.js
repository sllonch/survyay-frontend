import React, { Component } from "react";
import SurveyService from '../lib/survey-service';
import { Redirect } from 'react-router-dom';
import { withAuth } from '../providers/AuthProvider';
import { Link } from "react-router-dom";

class MySurvey extends Component {

  state = {
    survey: {},
    redirect: false
  }

  handleOnClick = (event) => {
    event.preventDefault();
    const id = this.props.survey._id;
    SurveyService.delete(id)
      .then( (survey) => {
        this.setState({
            survey,
            redirect: true
        });
      })
      .catch( error => console.log(error) )
  }

  render() {
    let  { redirect } = this.state;
    if (redirect) {
      return <Redirect to='/my-surveys'/>;
    }

    return (
      <div className="survey">
        <p className="survey-list-title">{this.props.survey.title}</p>
        <Link className="link" to={`/surveys/${this.props.survey._id}/add`}><button className="survey-results-btn">Add Participants</button></Link>
        <button onClick={this.handleOnClick} className="goto-survey-btn">Delete</button>
      </div>
    );
  }
}

export default withAuth(MySurvey);
