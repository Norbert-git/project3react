import React, { Component } from 'react';
import ToolModel from '../models/tool';

import ToolCard from '../components/ToolCard'

class ToolShow extends Component {
  state = {
    tool: {},
    currentTool: this.props.match.params.id
  }

  componentDidMount() {
    this.fetchData()
  }

  fetchData = () => {
    ToolModel.show(this.state.currentTool).then(data => {
      this.setState({ tool: data.tool })
    })
  }

  render() {
    return (
      <div>
        <ToolCard {...this.state.tool} />
      </div>
    );
  }
}

export default ToolShow;
