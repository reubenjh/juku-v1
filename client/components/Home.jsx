import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import Nav from './Nav'

///

const Home = () => (
  <div className='home-background'>
    <Nav />
    <div className='banner has-text-centered'>
      <h1 className='title is-1 has-text-white'>i'm julia, i make prints</h1>
      <Link to='/prints' className='has-text-white'>wanna buy one?</Link>
    </div>
  </div>
)

export default connect()(Home)
