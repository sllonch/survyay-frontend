import React, { Component } from 'react';
import SurveyService from '../lib/survey-service';
import { Redirect } from 'react-router-dom';
// import AnswerList from '../components/AnswerList'
import Menu from '../components/Menu'
import { withAuth } from '../providers/AuthProvider';
import MDSpinner from 'react-md-spinner';

class Survey extends Component {

  state = {
    survey: {},
    answer: "",
    isLoading : true,
    redirect: false,
    statusError: "",
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

  handleFormSubmit = (event) => {
    event.preventDefault();
    const id = this.props.match.params.id;
    const answer = this.state.answer;
    const userId = this.props.user._id;
    SurveyService.update(id, answer, userId)
      .then( (survey) => {
        this.setState({
            survey,
            redirect: true
        });
      })
      .catch( error => {
        this.setState({statusError: error.response.data.error});
      })
  }

  handleChange = (event) => {  
    const {name, value} = event.target;
    this.setState({[name]: value});
  }

  render() {
    let { survey, isLoading, redirect, statusError } = this.state;
    if (isLoading) {
      return <MDSpinner className="spinner" size={320} />
    }
    if (redirect) {
      return <Redirect to={`/surveys/${survey._id}/results`}/>
    }

    return (
      <div className="survey-page">
        <h2 className="question-title">Question:</h2>
        <p className="survey-title">{survey.title}</p> 
        <form id="survey-form" onSubmit={this.handleFormSubmit}>
          <div className="answer-list">
            {survey.answers.map((answer, index) => {
              return (
                <div key={`id=${index}`}>
                  <div className="answer">
                    <label><input type="radio" id={index} value={answer.answerTitle} onChange={this.handleChange} name="answer" unchecked="true" />{answer.answerTitle}</label>
                  </div>
                </div>
              );
            })}
          </div>
          {statusError ? <h4 className="error-msg">{statusError}</h4> : ''}
          <input id="vote" className="submit" type="submit" value="Vote and see results" />
        </form>
        <Menu />
      </div>
    );
  }
}

export default withAuth(Survey);