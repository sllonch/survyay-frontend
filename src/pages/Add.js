import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import SurveyService from '../lib/survey-service';
import Menu from '../components/Menu'
import { withAuth } from '../providers/AuthProvider';

class Add extends Component {

  state = {
    email: '',
    participants: [{
      email: ''
    }],
    error: false,
    isLoading: false,
    redirect: false
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    const { participants } = this.state;
    const id = this.props.match.params.id;
    SurveyService.addParticipants({ participants }, id )
      .then( (survey) => {
        this.setState({
            redirect: true
        });
      })
      .catch( error => console.log(error) )
  }

  handleParticipantNameChange = (index) => (event) => {
    const newParticipants = this.state.participants.map((participant, sindex) => {
      if (index !== sindex) return participant;
      return { ...participant, email: event.target.value }
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

  render() {
    let { 
      participants,
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
      return <Redirect to='/my-surveys'/>
    }
    return (
      <div className="new-survey">
      <h2 className="new-survey-title">Add Participants:</h2>
        <form id="mew-survey-form" onSubmit={this.handleFormSubmit}>
          <label>Participants:</label>
          {participants.map((participant, index) => (
            <div className="participant">
              <input key={`id=${index}`}
                type="email"
                placeholder={`Email of extra participant #${index + 1}`}
                value={participants.email}
                onChange={this.handleParticipantNameChange(index)}
                required={true}
              />
              <button type="button" onClick={this.handleRemoveParticipant(index)} className="minus-btn">-</button>
            </div>
          ))}
          <button type="button" onClick={this.handleAddParticipant} className="plus-btn">+</button>
          <button className="submit">Add participants</button>
        </form>
        <Menu />
      </div>
    )
  }
}

export default withAuth(Add);