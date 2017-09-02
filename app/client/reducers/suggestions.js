const initialState = {
    isOpen: false
};

const suggestions = (state = initialState, action) => {
    switch (action.type) {
        case 'OPEN_SUGGESTIONS':
            return Object.assign({}, state, { isOpen: true });
        case 'CLOSE_SUGGESTIONS':
            return Object.assign({}, state, { isOpen: false });
        default:
            return state;
    }
};

export default suggestions;
