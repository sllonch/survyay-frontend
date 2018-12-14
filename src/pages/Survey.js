import React, { Component } from 'react';
import SurveyService from '../lib/survey-service';
// import { Link } from 'react-router-dom';
import AnswerList from '../components/AnswerList'
import Menu from '../components/Menu'
import { withAuth } from '../providers/AuthProvider';

class Survey extends Component {
//   id: props.match.params.id,

  state = {
    survey: {},
    error: false,
    isLoading : true
  }

  componentDidMount () {
    SurveyService.detail(this.props.match.params.id)
      .then((survey) => {
        this.setState({
          survey,
          isLoading: false
        })
      })
      .catch((error) => {
        this.setState({
          error,
        })
      })
  }

  render() {
    let { survey, error, isLoading } = this.state;
    if (error) {
      return <div>Error during the connection</div>
    }
    return (
      <div className="survey-page">
        <h2>Question:</h2>
        <p>{survey.title}</p>
        <AnswerList answers={survey.answers} isLoading={isLoading} />
        <Menu />
      </div>
    );
  }
}

export default withAuth(Survey);