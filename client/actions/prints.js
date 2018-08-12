import request from 'superagent'

export function getPrints() {
    return dispatch => {
        dispatch(requestPrints())
        request.get('/api/prints/')
            .then(res => {
                dispatch(receivePrints(res.body.prints))
            })
            .catch(err => {
                dispatch(printRequestError(err.body.message))
                // TODO: test
            })
    }
}

function requestPrints() {
    return {
        type: 'REQUEST_PRINTS'
    }
}

function receivePrints(prints) {
    return {
        type: 'RECEIVE_PRINTS',
        prints
    }
}

function printRequestError (errorMessage) {
    return {
        type: 'PRINT_REQUEST_ERROR',
        errorMessage
    }
}