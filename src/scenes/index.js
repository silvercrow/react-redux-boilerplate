import React from 'react';
import { Route, Link } from 'react-router-dom'
import LoginContainer from 'Scenes/Login'
import AdminContainer from 'Scenes/Admin'

const App = () => (
  <div>
      <Route exact path="/" component={LoginContainer} />
      <Route exact path="/admin" component={AdminContainer} />
  </div>
)

export default App
