import React from 'react'
import {connect} from 'react-redux'
import Nav from './Nav'

const About = () => (
    <div>
      <Nav/>
      <p>TODO: About</p>
    </div>
)

export default connect()(About)
