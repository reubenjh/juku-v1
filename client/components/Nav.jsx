import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const Nav = () => (
    <nav className="navbar is-spaced is-transparent" role="navigation" aria-label="main navigation">
        <div className='container'>
            <div className="navbar-brand">
                <Link to='/' className='navbar-item'><h4 className='title is-4'>Juku</h4></Link>
                <a role="button" className="navbar-burger" data-target="navMenu" aria-label="menu" aria-expanded="false">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>

            <div className='navbar-menu' id="navMenu">
                <div className="navbar-start">
                </div>

                <div className="navbar-end">
                    <Link to='/prints' className='navbar-item'>prints</Link>
                    <Link to='/about' className='navbar-item'>about</Link>
                    <Link to='/contact' className='navbar-item'>contact</Link>
                </div>
            </div>
        </div>
    </nav>
)

export default connect()(Nav)
