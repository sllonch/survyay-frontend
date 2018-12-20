import React, { Component } from 'react';
import SurveyService from '../lib/survey-service';
import Menu from '../components/Menu'
import Chart from '../components/Chart'
import { withAuth } from '../providers/AuthProvider';
import MDSpinner from 'react-md-spinner';

class Results extends Component {

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
    if (isLoading) {
      return <MDSpinner className="spinner" size={320} />
    }
    if (error) {
      return <div>Error during the connection</div>
    }
    return (
      <div className="results-page">
        <h2 className="results-title">Results:</h2>
        <p className="survey-title">{survey.title}</p> 
        <Chart survey={survey}/>
        <div id="answer-list">
            {survey.answers.map((answer, index) => {
              return (
                <div key={`id=${index}`}>
                  <div className="answer">
                    <label>{answer.answerTitle} | Votes: {answer.votes}</label>
                  </div>
                </div>
              );
            })}
          </div>
        <Menu />
      </div>
    );
  }
}

export default withAuth(Results);