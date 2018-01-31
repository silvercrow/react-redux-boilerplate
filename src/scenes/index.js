import React from 'react';
import { Route, Link } from 'react-router-dom'
import Template from 'Common/components/Template'
import LoginContainer from 'Scenes/Login'
import AdminContainer from 'Scenes/Admin'


const App = () => (
  <Template>
      <Route exact path="/" component={LoginContainer} />
      <Route exact path="/admin" component={AdminContainer} />
  </Template>
)

export default App
