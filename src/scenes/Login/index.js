import React from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { FormModule, Container, H2, Input, Button } from './Style'

const LoginContainer = props => (
  <FormModule>
    <Container>
      <H2>Login to your account</H2>
      <form>
        <Input type="text" placeholder="Username"/>
        <Input type="password" placeholder="Password"/>
        <Button>Login</Button>
      </form>
    </Container>
  </FormModule>
)

const mapStateToProps = state => ({ count: state.counter.count, isIncrementing: state.counter.isIncrementing, isDecrementing: state.counter.isDecrementing })

const mapDispatchToProps = dispatch => bindActionCreators({
  changePage: () => push('/admin')
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer)
