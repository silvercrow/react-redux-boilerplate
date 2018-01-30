import React from 'react';
import { Route, Link } from 'react-router-dom'
import HomeContainer from 'Scenes/Home'
import AboutContainer from 'Scenes/About'
import NavbarContainer from 'Scenes/Navbar'
import DevTools from 'DevTools';

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
    <DevTools />
  </div>
)

export default App
