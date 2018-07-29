import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const Nav = () => (
    <div>
        <div className='columns has-text-centered'>
            <div className='column is-3 doesnt-stack-mobile'>
                <Link to='/prints'>
                    <p>
                        prints
                </p>
                </Link>
            </div>
            <div className='column is-6 doesnt-stack-mobile'>
                <Link to='/'>
                    <h3 className='title is-3'>
                        Juku
                </h3>
                </Link>
            </div>
            <div className='column is-3 doesnt-stack-mobile'>
                <Link to='/about'>
                    <p>
                        about
                    </p>
                </Link>
            </div>
        </div>
        <hr />
    </div>
)

export default connect()(Nav)
