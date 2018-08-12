const initialState = {
    isFetching: false,
    isSaving: false,
    list: [
        {title: 'juicy melons', description: 'juicy juicy melons from spain', quantity: 1, image: 'images/fakeart.jpg', price: 20},
        {title: 'pumpernickel', description: 'i drew this while eating pumpernickel', quantity: 1, image: 'images/fakeart.jpg', price: 33}
    ]
}

export default function prints (state = initialState, action) {
    switch (action.type) {
        case 'SOMETHING':
            //
        default:
            return state
    }
}