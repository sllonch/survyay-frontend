import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import auth from '../lib/auth-service';
import { withAuth } from '../providers/AuthProvider';

class Login extends Component {
  state = {
    email: "",
    password: "",
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const { email, password } = this.state

    auth.login({ email, password })
    .then( (user) => {
      this.props.setUser(user);
    })
    .catch( error => console.log(error) )
  }

  handleChange = (event) => {  
    const {name, value} = event.target;
    this.setState({[name]: value});
  }

  render() {
    const { email, password } = this.state;
    return (
      <div>
      <h1 className="login-title">Welcome to Survyay!</h1>
      <form onSubmit={this.handleFormSubmit}>
        <label>Email:</label>
        <input type="email" name="email" value={email} onChange={this.handleChange}/>
        <label>Password:</label>
        <input type="password" name="password" value={password} onChange={this.handleChange} />
        <input className="submit" type="submit" value="LOGIN" />
      </form>

        <p>New to Survyay? 
          <Link className="link" to={"/signup"}> Signup</Link>
        </p>

      </div>
    )
  }
}

export default withAuth(Login);