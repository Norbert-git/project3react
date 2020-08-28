import React, { Component } from 'react'
import ToolModel from '../models/tool'

import { Link } from 'react-router-dom'
import ToolCard from '../components/ToolCard'

class ToolList extends Component {
  state = {
    tools: []
  }

  componentDidMount() {
    this.fetchData()
  }

  fetchData = () => {
    ToolModel.all().then(data => {
      this.setState({ tools: data.tools })
    })
  }

  render() {
    let toolList = this.state.tools.map((tool, index) => {
      return (
        <Link to={`/tools/${ tool._id }`} key={index}>
          <ToolCard  {...tool} />
        </Link>
      )
    })

    return (
      <div>
        { this.state.tools }
      </div>
    )
  }
}

export default ToolList;
