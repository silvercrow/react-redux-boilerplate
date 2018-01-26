import React, { Component } from 'react';
import { Button, Jumbotron , Grid } from 'react-bootstrap';
import { voteAngular, voteReact, voteVuejs} from '../actions';

class App extends Component {
  constructor(props){
    super(props);
    this.store = this.props.store;
  }

  handleVoteAngular = ()=>{
    this.store.dispatch(voteAngular());
  }

  handleVoteReact = ()=>{
    this.store.dispatch(voteReact());
  }

  handleVoteVuejs = ()=>{
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
            </p>
            <p>
              <Button bsStyle="primary" onClick={this.handleVoteReact}>React</Button>
            </p>
            <p>
              <Button bsStyle="send" onClick={this.handleVoteVuejs}>Vue</Button>
            </p>
          </Jumbotron>





        </Grid>
      </div>);
  }
}

export default  App;