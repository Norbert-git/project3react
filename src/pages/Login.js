import React, { Component } from 'react'
import UserModel from '../models/user'

class Login extends Component {
  state = {
    email: '',
    password: '',
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()

    UserModel.login(this.state)
      .then(data => {
        console.log(data)
        
        if (!data.user) {
          return false
        }
        this.props.storeUser(data.user)
        this.props.history.push('/NewTool')
      })
      .catch(err => console.log(err))
  }

  
  render() {
    return (
      <div>
        <h2>Login</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="form">
            <label htmlFor="name"></label><br></br>
            <input 
              onChange={this.handleChange} 
              type="email" 
              id="email" 
              name="email" 
              placeholder= 'E-mail'
              value={this.state.email} />
          </div>

          <div className="form">
            <label htmlFor="password"></label><br></br>
            <input 
              onChange={this.handleChange} 
              type="password" 
              id="password" 
              name="password" 
              placeholder= 'Password'
              value={this.state.password} />
          
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
}

export default Login;
