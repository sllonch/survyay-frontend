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
               <div className="answer">
                 <label><input type="radio" id={index} value={answer} name="answer" unchecked="true" />{answer}</label>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default withAuth(AnswerList);