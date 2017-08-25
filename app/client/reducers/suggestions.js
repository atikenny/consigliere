const initialState = {
    isOpen: false,
    selectedSuggestion: ''
};

const suggestions = (state = false, action) => {
    switch (action.type) {
        case 'OPEN_SUGGESTIONS':
            return Object.assign({}, state, { isOpen: true });
        case 'CLOSE_SUGGESTIONS':
            return Object.assign({}, state, { isOpen: false });
        case 'SELECT_SUGGESTION':
            return Object.assign({}, state, {
                selectedSuggestion: action.selectedSuggestion
            });
        case 'CLEAR_SELECTED_SUGGESTION':
            return Object.assign({}, state, {
                selectedSuggestion: ''
            });
        default:
            return state;
    }
};

export default suggestions;
