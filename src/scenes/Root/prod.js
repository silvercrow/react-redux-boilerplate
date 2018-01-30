import React from 'react';
import { Route, Link } from 'react-router-dom'
import HomeContainer from 'Scenes/Home'
import AboutContainer from 'Scenes/About'
import NavbarContainer from 'Scenes/Navbar'

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
