import React from 'react';
import DevTools from 'DevTools';
import Template from 'Components/Template'
export default class DevToolsBox extends React.Component {
  render() {
    return (
      <Template>
        {this.props.children}
        <DevTools />
      </Template>
    )
  }
}