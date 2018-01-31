import React from 'react'
import {push} from 'react-router-redux'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
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
    <div className="well">
      <Form className="form-signin">
        <FormGroup>
          <Label for="exampleEmail">User:</Label>
          <Input type="input" name="email" id="exampleEmail" placeholder="username"/>
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password:</Label>
          <Input
            type="password"
            name="password"
            id="examplePassword"
            placeholder="password"/>
        </FormGroup>
        <Button color="success" onClick={() => props.changePage()}>Login</Button>
      </Form>
    </div>
  </div>
)

const mapStateToProps = state => ({count: state.counter.count, isIncrementing: state.counter.isIncrementing, isDecrementing: state.counter.isDecrementing})

const mapDispatchToProps = dispatch => bindActionCreators({
  changePage: () => push('/admin')
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer)
