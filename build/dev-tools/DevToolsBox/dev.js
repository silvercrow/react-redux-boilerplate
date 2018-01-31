import React from 'react';
import DevTools from 'DevTools';

export default class DevToolsBox extends React.Component {
  render() {
    return (
      <div>
        {this.props.children}
        <DevTools />
      </div>
    )
  }
}