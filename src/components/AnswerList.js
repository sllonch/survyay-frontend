import React, { Component } from 'react';
import Answer from './Answer'
import { withAuth } from '../providers/AuthProvider';

class AnswerList extends Component {
  render() {
    if (this.props.isLoading) {
      return <div>Loading...</div>
    }
    return (
      <div className="answer-list">
        {this.props.answers.map((answer, index) => {
          return (
            <div key={`id=${index}`}>
              <Answer answer={answer} id={index} />
            </div>
          );
        })}
      </div>
    );
  }
}

export default withAuth(AnswerList);