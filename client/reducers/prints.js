const initialState = {
    isFetching: false,
    isSaving: false,
    available: [],
    unavailable: [],
    errorMessage: null
}

export default function prints(state = initialState, action) {
    switch (action.type) {
        case 'REQUEST_PRINTS':
            return {
                ...state,
                isFetching: true,
                errorMessage: null
            }
        case 'RECEIVE_PRINTS':
            let newState = { ...state, isFetching: false }
            newState.available = action.prints.filter(p => p.quantity > 0)
            newState.unavailable = action.prints.filter(p => p.quantity === 0)
            return newState
        case 'PRINT_REQUEST_ERROR':
            return {
                ...state,
                isFetching: false,
                errorMessage: action.errorMessage
            }
        default:
            return state
    }
}