const initialState = [];

const item = (state, action) => {
    switch (action.type) {
        case 'OPEN_SUGGESTIONS':
            if (state.id !== action.id) {
                return state;
            }

            return Object.assign({}, state, { isOpen: true });
        case 'CLOSE_SUGGESTIONS':
            if (state.id !== action.id) {
                return state;
            }

            return Object.assign({}, state, { isOpen: false });
    }
};

const suggestions = (state = initialState, action) => {
    switch (action.type) {
        case 'OPEN_SUGGESTIONS':
        case 'CLOSE_SUGGESTIONS':
            if (!state.some(suggestion => suggestion.id === action.id)) {
                state.push({ id: action.id });
            }

            return state.map(suggestion => item(suggestion, action));
        default:
            return state;
    }
};

export default suggestions;
