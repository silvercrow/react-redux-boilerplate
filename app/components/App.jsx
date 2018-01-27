import React, { Component } from 'react';
import { Button, Jumbotron, Grid } from 'react-bootstrap';
import { voteAngular, voteReact, voteVuejs } from '../actions';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.store = this.props.store;
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

  getVotes =(type) =>{
    if(this.store.getState()){
      switch (type) {
        case "angular":
        return this.store.getState().angular;
          break;
        case "react":
        return this.store.getState().react;
          break;
        case "vuejs":
        return this.store.getState().vuejs;
          break;
      
        default:
        return ""
          break;
      } 
    }
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
              <span>{this.getVotes("angular")}</span>
            </p>
            <p>
              <Button bsStyle="primary" onClick={this.handleVoteReact}>React</Button>
              <span>{this.getVotes("react")}</span>
            </p>
            <p>
              <Button bsStyle="success" onClick={this.handleVoteVuejs}>Vue</Button>
              <span>{this.getVotes("vuejs")}</span>
            </p>
          </Jumbotron>





        </Grid>
      </div>);
  }
}