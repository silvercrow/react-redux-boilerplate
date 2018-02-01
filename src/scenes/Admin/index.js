import React from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
  increment,
  incrementAsync,
  decrement,
  decrementAsync
} from 'Reducers/counter'
import { Button, Badge, Jumbotron, Container } from 'reactstrap'
import NavBar from 'Components/Navbar'
const AdminContainer = props => (
  <div>
    <NavBar />
    <Container>
      <Jumbotron>
        <h1>Home</h1>
        <p>Count: {props.count}</p>
        <p>
          <Button color="primary" onClick={props.increment} disabled={props.isIncrementing}>Increment</Button>
          <Button color="primary" onClick={props.incrementAsync} disabled={props.isIncrementing}>Increment Async</Button>
        </p>
        <p>
          <Button color="danger" onClick={props.decrement} disabled={props.isDecrementing}>Decrement</Button>
          <Button color="danger" onClick={props.decrementAsync} disabled={props.isDecrementing}>Decrement Async</Button>
        </p>

      </Jumbotron>
    </Container>
  </div>
)

const mapStateToProps = state => ({
  count: state.counter.count,
  isIncrementing: state.counter.isIncrementing,
  isDecrementing: state.counter.isDecrementing
})

const mapDispatchToProps = dispatch => bindActionCreators({
  increment,
  incrementAsync,
  decrement,
  decrementAsync,
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AdminContainer)
