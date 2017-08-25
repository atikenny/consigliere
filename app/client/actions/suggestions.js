export const open = () => {
    return {
        type: 'OPEN_SUGGESTIONS'
    };
};

export const close = () => {
    return {
        type: 'CLOSE_SUGGESTIONS'
    };
};

export const select = (selectedSuggestion) => {
    return {
        type: 'SELECT_SUGGESTION',
        selectedSuggestion
    };
};

export const clearSelected = () => {
    return {
        type: 'CLEAR_SELECTED_SUGGESTION'
    };
};
