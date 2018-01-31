import React from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Button} from 'reactstrap'
const LoginContainer =  props => (
  <div>
    <h1>Login Page</h1>
    <p><Button color="success" onClick={() => props.changePage()}>Go to Login Page</Button></p>
  </div>
)

const mapStateToProps = state => ({
  count: state.counter.count,
  isIncrementing: state.counter.isIncrementing,
  isDecrementing: state.counter.isDecrementing
})

const mapDispatchToProps = dispatch => bindActionCreators({
  changePage: () => push('/admin')
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginContainer)


