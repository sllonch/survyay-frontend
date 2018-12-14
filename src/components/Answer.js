import React, { Component } from "react";
import { withAuth } from '../providers/AuthProvider';

class Answer extends Component {
  render() {
    return (
      <div className="answer">
        <label><input type="radio" id={this.props.id} value={this.props.answer} name="answer" unchecked="true" />{this.props.answer}</label>
      </div>
    );
  }
}

export default withAuth(Answer);
