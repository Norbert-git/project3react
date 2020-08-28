import React, { Component } from 'react';
import ToolModel from '../models/tool'

class NewTool extends Component {
  state = {
    name: '',
 
  }

  handleSubmit = (event) => {
    event.preventDefault();

    ToolModel.create(this.state)
      .then(data => {
        this.props.history.push('/tools')
      })
  }

  handleChange = (event) => {
    if (event.target.type !== "text") {
      this.setState({ completed: !this.state.completed })
    }

    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return (
      <div>
        <h2>New Tool</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="form-input">
            <label htmlFor="name"></label><br></br>
            <input 
              type="text" 
              name="name"
              placeholder= 'New Tool'
              onChange={this.handleChange}
              value={this.state.title} />
          </div>
          <input type="submit" value="Save"/>
        </form>
      </div>
    );
  }
}



export default NewTool
