const initialState = {
    isFetching: false,
    isSaving: false,
    list: []
}

export default function prints (state = initialState, action) {
    switch (action.type) {
        case 'SOMETHING':
            //
        default:
            return state
    }
}