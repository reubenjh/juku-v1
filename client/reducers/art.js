const initialState = [
    {image: 'images/fakeart.jpg'},
    {image: 'images/fakeart.jpg'},
    {image: 'images/fakeart.jpg'}
]

export default function prints (state = initialState, action) {
    switch (action.type) {
        case 'SOMETHING':
            //
        default:
            return state
    }
}