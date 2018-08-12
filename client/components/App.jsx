import React from 'react'
import { connect } from 'react-redux'
import { HashRouter as Router, Route } from 'react-router-dom'

import Home from './Home'
import About from './About'
import Prints from './Prints'
import Contact from './Contact'

///

const App = () => (
  <Router>
    <div className='app-container'>
      <Route exact path='/' component={Home} />
      <Route exact path='/about' component={About} />
      <Route exact path='/prints' component={Prints} />
      <Route exact path='/contact' component={Contact} />
    </div>
  </Router>
)

export default connect()(App)
