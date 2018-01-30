import React from 'react';
import { Route, Link } from 'react-router-dom'
import HomeContainer from './Home'
import AboutContainer from './About'
import NavbarContainer from './Navbar'

const App = () => (
  <div>
    <header>
      <Link to="/">Home</Link>
      <Link to="/about-us">About</Link>
    </header>


    <main>
      <Route exact path="/" component={HomeContainer} />
      <Route exact path="/about-us" component={AboutContainer} />
    </main>
  </div>
)

export default App
