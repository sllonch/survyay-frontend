import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import SurveyService from '../lib/survey-service';
import Menu from '../components/Menu'
import { withAuth } from '../providers/AuthProvider';

class NewSurvey extends Component {

  state = {
    email: '',
    participants: [{
      email: ''
    }],
    title: '',
    answerTitle: '',
    answers: [{ 
      answerTitle: '', 
      votes: 0 
    }],
    numberOfAnswers: 2,
    error: false,
    isLoading: false,
    redirect: false
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    const { participants, title, answers } = this.state;
    console.log(this.state)
    console.log(answers)
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

  handleParticipantNameChange = (index) => (event) => {
    const newParticipants = this.state.participants.map((participant, sindex) => {
      if (index !== sindex) return participant;
      return { ...participant, email: event.target.value };
    });

    this.setState({ participants: newParticipants });
  }

  handleAddParticipant = () => {
    this.setState({
      participants: this.state.participants.concat([{ email: ''}])
    });
  }

  handleRemoveParticipant = (index) => () => {
    this.setState({
      participants: this.state.participants.filter((s, sindex) => index !== sindex)
    });
  }

  handleAnswerNameChange = (index) => (event) => {
    const newAnswers = this.state.answers.map((answer, sindex) => {
      if (index !== sindex) return answer;
      return { ...answer, answerTitle: event.target.value };
    });

    this.setState({ answers: newAnswers });
  }

  handleAddAnswer = () => {
    this.setState({
      answers: this.state.answers.concat([{ answerTitle: '', votes: 0 }])
    });
  }

  handleRemoveAnswer = (index) => () => {
    this.setState({
      answers: this.state.answers.filter((s, sindex) => index !== sindex)
    });
  }

  render() {
    let { 
      participants,
      title,
      answers,
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
          {participants.map((participant, index) => (
            <div className="participant">
              <input key={`id=${index}`}
                type="email"
                placeholder={`Email of participant #${index + 1}`}
                value={participants.email}
                onChange={this.handleParticipantNameChange(index)}
              />
              <button type="button" onClick={this.handleRemoveParticipant(index)} className="small">-</button>
            </div>
          ))}
          <button type="button" onClick={this.handleAddParticipant} className="small">Add Participant</button>
          <label>Title:</label>
          <input type="text" name="title" value={title} onChange={this.handleChange} placeholder="Type your question title" required={true}/>
          <label>Answers:</label>
          {answers.map((answer, index) => (
            <div className="answer">
              <input key={`id=${index}`}
                type="text"
                placeholder={`Answer #${index + 1} title`}
                value={answer.answerTitle}
                onChange={this.handleAnswerNameChange(index)}
              />
              <button type="button" onClick={this.handleRemoveAnswer(index)} className="small">-</button>
            </div>
          ))}
          <button type="button" onClick={this.handleAddAnswer} className="small">Add Answer</button>
          <button>Create Survey</button>
        </form>
        <Menu />
      </div>
    )
  }
}

export default withAuth(NewSurvey);