import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import SurveyService from '../lib/survey-service';
import Menu from '../components/Menu'
import { withAuth } from '../providers/AuthProvider';

class NewSurvey1 extends Component {

  state = {
    participants: [],
    title: '',
    answerTitle: '',
    answers: [{ 
      answerTitle: '',
      votes: 0
     }],
    error: false,
    isLoading: false,
    redirect: false
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const { participants, title, answers } = this.state;
    const owner = this.props.user._id;
    SurveyService.create({ participants, title, answers}, owner )
      .then( (survey) => {
        this.setState({
            redirect: true
        });
      })
      .catch( error => console.log(error) )
  }

  handleChange = (event) => {  
    const {name, value} = event.target;
    this.setState({[name]: value});
  }

  handleAnswerChange = (idx) => (event) => {
    const newAnswers = this.state.answers.map((answer, sidx) => {
      if (idx !== sidx) return answer;
      return { ...answer, name: event.target.value };
    });

    this.setState({ answers: newAnswers });
  }


  render() {
    let { 
      participants,
      title,
      answerTitle = [],
      error, 
      isLoading, 
      redirect 
    } = this.state;

    if (isLoading) {
      return <div>Loading...</div>
    }
    if (error) {
      return <div>Error during the connection</div>
    }
    if (redirect) {
      return <Redirect to='/surveys'/>
    }
    return (
      <div className="new-survey">
       <h2 className="new-survey-title">New Survey:</h2>
        <form id="mew-survey-form" onSubmit={this.handleFormSubmit}>
          <label>Participants:</label>
          <input type="email" name="participants" value={participants} onChange={this.handleChange} placeholder="example@example.com" required={true}/>
          <label>Title:</label>
          <input type="text" name="title" value={title} onChange={this.handleChange} placeholder="Type your question title" required={true}/>
          <label>Answer 1:</label>
          <input type="text" name="answerTitle" value={answerTitle} onChange={this.handleAnswerChange} placeholder="Type your first answer" required={true}/>
          <label>Answer 2:</label>
          <input type="text" name="answerTitle[1]" value={answerTitle} onChange={this.handleAnswerChange} placeholder="Type your second answer" required={true}/>
          <input id="vote" className="submit" type="submit" value="CREATE SURVEY" />
        </form>
        <Menu />
      </div>
    );
  }
}

export default withAuth(NewSurvey1);