import React, { Component } from 'react';

class Search extends Component {
  state = {
    searchValue: '',
  }

  handleForm = event => {
    this.setState({
      searchValue: event.target.value
    })

  }

  handleSubmit = event => {
    event.preventDefault(); //To prevent making a request
    const { searchValue } = this.state;
    this.props.onSubmit(searchValue);
  }

  render() {
    return (
      <div className="search">
      <form onSubmit={this.handleSubmit}>
        <input id="survey-search" type="text" value={this.state.searchValue} onChange={this.handleForm} name="searchValue" placeholder="Type the title of a survey" />
        <input id="survey-search-btn" type="submit" value="Search"/>
        </form>
      </div>
    );
  }
}

export default Search;