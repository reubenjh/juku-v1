import React from 'react'
import { connect } from 'react-redux'

const Print = (props) => {
    const { title, quantity, description, image, price } = props.print
    return (
        <div className='column is-6'>
            <div className='columns is-multiline'>
                <div className='column is-12'>
                    <img src={image} alt={description} />
                </div>
                <div className='column is-12'>
                    <h3 className='title is-3'>{title}</h3>
                </div>
                <div className='column is-12'>
                    <p>{description}</p>
                </div>
                <div className='column is-12'>
                    <h5 className='subtitle is-5'>${price}</h5>
                </div>
            </div>
        </div>
    )
}

export default connect()(Print)