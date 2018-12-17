import React, { Component } from 'react';
import SurveyService from '../lib/survey-service';
import Search from '../components/Search'
import MySurveysList from '../components/MySurveysList'
import Menu from '../components/Menu'
import { withAuth } from '../providers/AuthProvider';

class MySurveys extends Component {

  state = {
    surveys: [],
    searchValue: '',
    error: false,
    isLoading : true
  }

  componentDidMount () {
    SurveyService.listCreated()
      .then((surveys) => {
        this.setState({
          surveys,
          isLoading: false
        })
      })
      .catch((error) => {
        this.setState({
          error,
        })
      })
  }

  searchSurveys = (inputText) => {
    this.setState ({ searchValue: inputText })
  } 

  render() {
    let { surveys, searchValue, error, isLoading } = this.state;
    const surveys2 = surveys.filter(survey => {
      return survey.title.includes(searchValue);
    });
    if (surveys.length === 0) { // First render
      return (
        <div>
          <h1>Welcome {this.props.user.name}</h1>
          <div>You do not have any survey</div>
          <Menu />
        </div>
      )
    }
    if (error) {
      return <div>Error during the connection</div>
    }
    if (surveys2.length === 0) {
      return (
      <div>
        <h1>Welcome {this.props.user.name}</h1>
        <Search onSubmit={this.searchSurveys} />
        <h2>Survey List:</h2>
        <div>No surveys matched your search criteria</div>
        <Menu />
      </div>
      )
    }
    return (
      <div className="survey-list">
        <h1>My Surveys:</h1>
        <Search onSubmit={this.searchSurveys} />
        <MySurveysList surveys={surveys2} isLoading={isLoading}/>
        <Menu />
      </div>
    )
  }
}

export default withAuth(MySurveys);
