import React, { Component } from 'react';
import { Button, Jumbotron, Grid } from 'react-bootstrap';
import { voteAngular, voteReact, voteVuejs } from '../actions';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.store = this.props.store;
    this.votes = { angular: 1 };
  }

  componentWillMount() {
    console.log("Initial State", this.store.getState());
  }

  componentWillReceiveProps(newProps) {
    console.log("New props", newProps.store.getState());

    this.votes = newProps.store.getState();
  }

  handleVoteAngular = () => {
    this.store.dispatch(voteAngular());
  }

  handleVoteReact = () => {
    this.store.dispatch(voteReact());
  }

  handleVoteVuejs = () => {
    this.store.dispatch(voteVuejs());
  }


  render() {
    return (
      <div>
        <Grid fluid>
          <Jumbotron>
            <h1>Hello, world!</h1>
            <p>
              This is a simple Redux app
            </p>
            <p>
              <Button bsStyle="danger" onClick={this.handleVoteAngular}>Angular</Button>
              <span>{this.votes.angular}</span>
            </p>
            <p>
              <Button bsStyle="primary" onClick={this.handleVoteReact}>React</Button>
            </p>
            <p>
              <Button bsStyle="success" onClick={this.handleVoteVuejs}>Vue</Button>
            </p>
          </Jumbotron>





        </Grid>
      </div>);
  }
}