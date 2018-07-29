import React from 'react'
import {connect} from 'react-redux'
import {Route} from 'react-router-dom'

// components
import Nav from './Nav'
import Home from './Home'
import About from './About'
import Prints from './Prints'



const App = () => (
    <div className='app-container section'>
      <Nav/>
      <Route exact path='/' component={Home}/>
      <Route exact path='/about' component={About}/>
      <Route exact path='/prints' component={Prints}/>
    </div>
)

export default connect()(App)
