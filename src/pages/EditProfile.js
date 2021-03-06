import React, { Component } from 'react';
import Menu from '../components/Menu'
import auth from '../lib/auth-service';
import { withAuth } from '../providers/AuthProvider';
import { Redirect } from 'react-router-dom';

class EditProfile extends Component {

  state = {
    name: "",
    email: "",
    password: "",
    redirect: false,
    statusError: "",
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const {name, email} = this.state;

    auth.edit({ name, email })
    .then( (user) => {
      this.props.setUser(user);
    })
    .catch( error => this.setState({statusError: error.response.data.error}) )

    this.setState({ redirect: true });
  }

  handleChange = (event) => {  
    const {name, value} = event.target;
    this.setState({[name]: value});
  }

  render() {
    const {redirect} = this.state;

    if (redirect) {
      return <Redirect to={`/profile`}/>
    }

    const { name, email } = this.state;
    return (
      <div className="survey-list">
        <h1>Edit Profile</h1>
        <form onSubmit={this.handleFormSubmit}>
          <label>Name:</label>
          <input type="text" name="name" value={name} onChange={this.handleChange} placeholder={this.props.user.name} required={true}/>
          <label>Email:</label>
          <input type="email" name="email" value={email} onChange={this.handleChange} placeholder={this.props.user.email} required={true}/>
          <input className="submit" type="submit" value="Edit profile" />
        </form>
        <Menu />
      </div>
    )
  }
}

export default withAuth(EditProfile);
