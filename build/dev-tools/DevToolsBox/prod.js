import React from 'react';
import Template from 'Components/Template'

export default class DevToolsBox extends React.Component {
  render() {
    return (
      <Template>
        {this.props.children}
      </Template>
    )
  }
}