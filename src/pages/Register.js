import React, { Component } from 'react'
import UserModel from '../models/user'

class Register extends Component {
  state = {
    name: '',
    email: '',
    password: ''
  }
  
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    
    event.preventDefault()

    UserModel.create(this.state)
      .then(data => {
        console.log(data)
        this.setState({
          name: '',
          email: '',
          password: ''
        })

        this.props.history.push('/login')
      })
  }

  render() {
    return (
      <div>
        <h2>Register</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="name"></label><br></br>
            <input 
                onChange={this.handleChange} 
                type="text" 
                id="name" 
                name="name" 
                placeholder= 'Name'
                value={this.state.name}
            />
          </div>

          <div className="form-group">
            <label htmlFor="name"></label><br></br>
            <input 
              onChange={this.handleChange} 
              type="email" 
              id="email" 
              name="email" 
              placeholder='E-mail'
              value={this.state.email} />
          </div>

          <div className="form-group">
            <label htmlFor="name"></label><br></br>
            <input 
              onChange={this.handleChange} 
              type="password" 
              id="password" 
              name="password"
              placeholder= "Password" 
              value={this.state.password} />
          </div>

          <button type="submit">Register</button>
        </form>
      </div>
    )
  }
}

export default Register;
