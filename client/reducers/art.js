const initialState = [
    {src: 'images/fakeart.jpg'},
    {src: 'images/fakeart.jpg'},
    {src: 'images/fakeart.jpg'}
]

export default function artRuducer (state = initialState, action) {
    switch (action.type) {
        case 'SOMETHING':
            //
        default:
            return state
    }
}