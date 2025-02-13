import React from 'react'
import { connect } from 'react-redux'

import Nav from './Nav'
import Print from './Print'
import {getPrints} from '../actions/prints'

///

class Prints extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.dispatch(getPrints())
  }


  render() {
    const prints = this.props.prints.available

    return (
      <div>
        <Nav />
        <div className='section'>
          <div className='columns is-centered'>
            <div className='column is-10'>
              <h1 className='title is-1 has-text-centered'>Prints</h1>
              <div className='columns is-multiline'>
                {prints.map(p => <Print print={p} key={p.id}/>)}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ prints }) => ({ prints })
export default connect(mapStateToProps)(Prints)
