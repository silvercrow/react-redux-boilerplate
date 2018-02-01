import React from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText
} from 'reactstrap';

const LoginContainer = props => (
  <div>
    <Form className="form-signin">
      <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
      <Input className="form-control" type="input" name="email" id="exampleEmail" placeholder="username" />
      <Input className="form-control"
        type="password"
        name="password"
        id="examplePassword"
        placeholder="password" />
      <Button className="btn btn-lg btn-primary btn-block" onClick={() => props.changePage()}>Login</Button>
    </Form>
  </div>
)

const mapStateToProps = state => ({ count: state.counter.count, isIncrementing: state.counter.isIncrementing, isDecrementing: state.counter.isDecrementing })

const mapDispatchToProps = dispatch => bindActionCreators({
  changePage: () => push('/admin')
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer)
