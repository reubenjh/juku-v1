import React from 'react'
import {connect} from 'react-redux'
import Nav from './Nav'

const Prints = () => (
    <div>
      <Nav />
      <p>TODO: Prints</p>
    </div>
)

export default connect()(Prints)
