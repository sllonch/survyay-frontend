import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import auth from '../lib/auth-service';
import { withAuth } from '../providers/AuthProvider';

class Signup extends Component {

  state = {
    name: "",
    email: "",
    password: "",
    statusError: "",
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    const name = this.state.name;
    const email = this.state.email;
    const password = this.state.password;

    auth.signup({ name, email, password })
      .then( (user) => {
        this.setState({
            name: "",
            email: "",
            password: "",
        });
        this.props.setUser(user)
      })
      .catch( error => this.setState({statusError: error.response.data.error}) )
  }

  handleChange = (event) => {  
    const {name, value} = event.target;
    this.setState({[name]: value});
  }

  render() {
    const { name, email, password, statusError } = this.state;
    return (
      <div>
        <Link className="link" to={"/"}><div className="logoH"></div></Link>
        <h1 className="register-title">Register to Survyay!</h1>
        <form onSubmit={this.handleFormSubmit}>
          <label>Name:</label>
          <input type="text" name="name" value={name} onChange={this.handleChange} placeholder="John Doe" required={true}/>
          <label>Email:</label>
          <input type="email" name="email" value={email} onChange={this.handleChange} placeholder="example@example.com" required={true}/>
          <label>Password:</label>
          <input type="password" name="password" value={password} onChange={this.handleChange} placeholder="Must have at least 6 characters" required={true}/>
          {statusError ? <h4 className="error-msg">{statusError}</h4> : ''}
          <input className="submit" type="submit" value="SIGNUP" />
        </form>
        <p>Already have an account? 
          <Link className="link" to={"/login"}> Login</Link>
        </p>
      </div>
    )
  }
}

export default withAuth(Signup);