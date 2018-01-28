import React, { Component } from 'react';
import { Button, Badge, Jumbotron, Container} from 'reactstrap';
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
        <Container>
          <Jumbotron>
            <h1>Hello, world!</h1>
            <p>
              This is a simple Redux app
            </p>
            <p>
              <Button color="danger" onClick={this.handleVoteAngular}>Angular</Button>
              <Badge>{this.getVotes("angular")}</Badge>
            </p>
            <p>
              <Button color="primary" onClick={this.handleVoteReact}>React</Button>
              <Badge>{this.getVotes("react")}</Badge>
            </p>
            <p>
              <Button color="success" onClick={this.handleVoteVuejs}>Vue</Button>
              <Badge>{this.getVotes("vuejs")}</Badge>
            </p>
          </Jumbotron>
        </Container>
      </div>);
  }
}